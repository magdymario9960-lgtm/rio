import { i as __toESM } from "../_runtime.mjs";
import { a as useFrame, c as MathUtils, d as require_jsx_runtime, f as require_react, i as Canvas, l as Vector3, n as Center, r as useGLTF, s as Box3, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { n as prefersReducedMotion, r as useRioStore } from "./routes-RLTz5Bu0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parrot-stage-DuTIXBcG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
useGLTF.preload("/models/parrot.glb");
/** Tripo macaw is authored facing -X; +90° yaw puts the face toward the camera. */
var FACE_YAW = Math.PI / 2;
function ParrotModel({ reduced, isMobile }) {
	const { scene } = useGLTF("/models/parrot.glb", true, true);
	const root = (0, import_react.useRef)(null);
	const inner = (0, import_react.useRef)(null);
	const fitted = (0, import_react.useRef)(false);
	const t = (0, import_react.useRef)(0);
	const flap = (0, import_react.useRef)(0);
	const pulse = useRioStore((s) => s.pulse);
	const lastPulse = (0, import_react.useRef)(pulse);
	const clone = (0, import_react.useMemo)(() => scene.clone(true), [scene]);
	(0, import_react.useEffect)(() => {
		clone.traverse((obj) => {
			const mesh = obj;
			if (mesh.isMesh) {
				mesh.castShadow = !isMobile;
				mesh.receiveShadow = false;
				const mat = mesh.material;
				if (mat && !Array.isArray(mat)) {
					const std = mat;
					std.envMapIntensity = .7;
					std.roughness = Math.min(std.roughness ?? .6, .62);
				}
			}
		});
	}, [clone, isMobile]);
	(0, import_react.useEffect)(() => {
		if (pulse !== lastPulse.current) {
			lastPulse.current = pulse;
			flap.current = 1;
		}
	}, [pulse]);
	useFrame((_, delta) => {
		const d = Math.min(delta, .1);
		const group = root.current;
		const body = inner.current;
		if (!group || !body) return;
		if (!fitted.current) {
			const size = new Box3().setFromObject(body).getSize(new Vector3());
			if (size.y > 1e-4) {
				const target = isMobile ? .92 : 1.38;
				body.scale.setScalar(target / size.y);
				fitted.current = true;
			}
		}
		const { pointer, scroll } = useRioStore.getState();
		t.current += d;
		const side = isMobile ? .78 : 1.55;
		const x = MathUtils.lerp(side, isMobile ? .95 : 1.7, Math.min(1, scroll * 1.1));
		const y = MathUtils.lerp(isMobile ? -.55 : -.22, .28, Math.sin(scroll * Math.PI));
		const z = MathUtils.lerp(0, -.4, scroll);
		group.position.x = MathUtils.damp(group.position.x, -Math.abs(x) + (isMobile ? .2 : 0), 3, d);
		group.position.y = MathUtils.damp(group.position.y, y, 3, d);
		group.position.z = MathUtils.damp(group.position.z, z, 3, d);
		if (reduced) {
			group.rotation.set(0, 0, 0);
			body.rotation.set(0, FACE_YAW, 0);
			return;
		}
		const breath = 1 + Math.sin(t.current * 2.1) * .012;
		body.scale.y = (body.scale.x || 1) * breath;
		body.rotation.y = FACE_YAW;
		if (flap.current > 0) {
			flap.current = Math.max(0, flap.current - d * 1.6);
			body.rotation.z = Math.sin(flap.current * Math.PI) * .28;
		} else body.rotation.z = MathUtils.damp(body.rotation.z, Math.sin(t.current * 1.15) * .04, 4, d);
		const lookX = pointer.x * .28;
		const lookY = -pointer.y * .18;
		const targetYaw = lookX;
		const targetPitch = lookY * .45 + Math.sin(t.current * 1.4) * .025;
		group.rotation.y = MathUtils.damp(group.rotation.y, targetYaw, 2.4, d);
		group.rotation.x = MathUtils.damp(group.rotation.x, targetPitch, 2.4, d);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: root,
		position: [
			isMobile ? -.7 : -1.45,
			isMobile ? -.5 : -.2,
			0
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: inner,
			rotation: [
				0,
				FACE_YAW,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", { object: clone }) })
		})
	});
}
function ParrotStage() {
	const reduced = prefersReducedMotion();
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "h-full w-full",
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: isMobile ? "low-power" : "high-performance"
		},
		dpr: isMobile ? [1, 1.15] : [1, 1.6],
		camera: {
			position: [
				0,
				.25,
				4.4
			],
			fov: isMobile ? 38 : 30
		},
		shadows: !isMobile,
		onCreated: ({ gl }) => {
			gl.toneMapping = 4;
			gl.toneMappingExposure = 1.05;
			gl.setClearColor(0, 0);
			gl.shadowMap.type = 1;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#ffe6c8",
				"#2a1016",
				.85
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					3.2,
					5.4,
					2.8
				],
				intensity: 2.1,
				color: "#ffe1b5",
				castShadow: !isMobile
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-3.4,
					1.6,
					-2
				],
				intensity: .55,
				color: "#7ec8d6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					.6,
					4.2,
					3.2
				],
				intensity: 28,
				angle: .38,
				penumbra: .8,
				color: "#f1d39a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParrotModel, {
				reduced,
				isMobile
			}),
			!isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					-1.15,
					0
				],
				opacity: .35,
				scale: 6,
				blur: 2.4,
				far: 2.5
			}) : null
		]
	});
}
//#endregion
export { ParrotStage };
