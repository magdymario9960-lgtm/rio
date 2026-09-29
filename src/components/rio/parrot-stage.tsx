import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRioStore } from "@/lib/rio-store";
import { prefersReducedMotion } from "@/lib/utils";

useGLTF.preload("/models/parrot.glb");

function ParrotModel({ reduced, isMobile }: { reduced: boolean; isMobile: boolean }) {
  const { scene } = useGLTF("/models/parrot.glb", true, true);
  const root = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const fitted = useRef(false);
  const t = useRef(0);
  const flap = useRef(0);
  const pulse = useRioStore((s) => s.pulse);
  const lastPulse = useRef(pulse);

  const clone = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clone.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = !isMobile;
        mesh.receiveShadow = false;
        const mat = mesh.material;
        if (mat && !Array.isArray(mat)) {
          const std = mat as THREE.MeshStandardMaterial;
          std.envMapIntensity = 0.7;
          std.roughness = Math.min(std.roughness ?? 0.6, 0.62);
        }
      }
    });
  }, [clone, isMobile]);

  useEffect(() => {
    if (pulse !== lastPulse.current) {
      lastPulse.current = pulse;
      flap.current = 1;
    }
  }, [pulse]);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.1);
    const group = root.current;
    const body = inner.current;
    if (!group || !body) return;

    if (!fitted.current) {
      const box = new THREE.Box3().setFromObject(body);
      const size = box.getSize(new THREE.Vector3());
      if (size.y > 0.0001) {
        const target = isMobile ? 1.05 : 1.55;
        body.scale.setScalar(target / size.y);
        fitted.current = true;
      }
    }

    const { pointer, scroll } = useRioStore.getState();
    t.current += d;

    const side = isMobile ? 0.7 : 1.35;
    const x = THREE.MathUtils.lerp(side, isMobile ? 0.9 : 1.55, Math.min(1, scroll * 1.1));
    const y = THREE.MathUtils.lerp(isMobile ? -0.45 : -0.15, 0.22, Math.sin(scroll * Math.PI));
    const z = THREE.MathUtils.lerp(0.2, -0.25, scroll);

    group.position.x = THREE.MathUtils.damp(group.position.x, -Math.abs(x) + (isMobile ? 0.15 : 0), 3, d);
    group.position.y = THREE.MathUtils.damp(group.position.y, y, 3, d);
    group.position.z = THREE.MathUtils.damp(group.position.z, z, 3, d);

    if (reduced) {
      group.rotation.set(0, 0, 0);
      return;
    }

    const breath = 1 + Math.sin(t.current * 2.1) * 0.012;
    body.scale.y = (body.scale.x || 1) * breath;

    if (flap.current > 0) {
      flap.current = Math.max(0, flap.current - d * 1.6);
      body.rotation.z = Math.sin(flap.current * Math.PI) * 0.28;
    } else {
      body.rotation.z = THREE.MathUtils.damp(body.rotation.z, Math.sin(t.current * 1.15) * 0.04, 4, d);
    }

    const lookX = pointer.x * 0.25;
    const lookY = -pointer.y * 0.16;
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, lookX, 2.4, d);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, lookY * 0.4 + Math.sin(t.current * 1.4) * 0.02, 2.4, d);
  });

  return (
    <group ref={root} position={[isMobile ? -0.65 : -1.25, isMobile ? -0.4 : -0.12, 0.2]}>
      <group ref={inner} rotation={[-0.1, Math.PI / 2 + 0.55, 0]}>
        <Center>
          <primitive object={clone} />
        </Center>
      </group>
    </group>
  );
}

export function ParrotStage() {
  const reduced = prefersReducedMotion();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const dpr: [number, number] = isMobile ? [1, 1.15] : [1, 1.6];

  return (
    <Canvas
      className="h-full w-full"
      gl={{ antialias: true, alpha: true, powerPreference: isMobile ? "low-power" : "high-performance" }}
      dpr={dpr}
      camera={{ position: [0, 0.2, 4.2], fov: isMobile ? 38 : 30 }}
      shadows={!isMobile}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.2;
        gl.setClearColor(0x000000, 0);
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
    >
      <hemisphereLight args={["#ffe6c8", "#2a1016", 0.85]} />
      <directionalLight position={[3.2, 5.4, 2.8]} intensity={2.1} color="#ffe1b5" castShadow={!isMobile} />
      <directionalLight position={[-3.4, 1.6, -2]} intensity={0.55} color="#7ec8d6" />
      <spotLight position={[0.6, 4.2, 3.2]} intensity={28} angle={0.38} penumbra={0.8} color="#f1d39a" />
      <ParrotModel reduced={reduced} isMobile={isMobile} />
      {!isMobile ? <ContactShadows position={[0, -1.15, 0]} opacity={0.35} scale={6} blur={2.4} far={2.5} /> : null}
    </Canvas>
  );
}
