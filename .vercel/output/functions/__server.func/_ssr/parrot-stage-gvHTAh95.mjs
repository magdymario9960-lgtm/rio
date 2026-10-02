import { i as __toESM } from "../_runtime.mjs";
import { a as useFrame, c as MathUtils, d as require_jsx_runtime, f as require_react, i as Canvas, l as Vector3, n as Center, r as useGLTF, s as Box3, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { n as prefersReducedMotion, r as useRioStore } from "./routes-BCtwSlXo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parrot-stage-gvHTAh95.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
useGLTF.preload("/models/parrot.glb");
/** Authored mesh faces -X; this yaw puts the cream macaw face toward the camera. */
var FACE_YAW = Math.PI / 2 + .55;
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
					std.envMapIntensity = .75;
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
				const target = isMobile ? .82 : 1.48;
				body.scale.setScalar(target / size.y);
				fitted.current = true;
			}
		}
		const { pointer, scroll } = useRioStore.getState();
		t.current += d;
		const side = isMobile ? .22 : 1.22;
		const x = MathUtils.lerp(side, isMobile ? .28 : 1.45, Math.min(1, scroll * 1.1));
		const y = MathUtils.lerp(isMobile ? -.28 : -.12, .18, Math.sin(scroll * Math.PI));
		const z = MathUtils.lerp(isMobile ? .35 : .15, -.2, scroll);
		group.position.x = MathUtils.damp(group.position.x, -Math.abs(x), 3, d);
		group.position.y = MathUtils.damp(group.position.y, y, 3, d);
		group.position.z = MathUtils.damp(group.position.z, z, 3, d);
		body.rotation.y = FACE_YAW;
		if (reduced) {
			group.rotation.set(0, .18, 0);
			return;
		}
		const breath = 1 + Math.sin(t.current * 2.1) * .012;
		body.scale.y = (body.scale.x || 1) * breath;
		if (flap.current > 0) {
			flap.current = Math.max(0, flap.current - d * 1.6);
			body.rotation.z = Math.sin(flap.current * Math.PI) * .28;
		} else body.rotation.z = MathUtils.damp(body.rotation.z, Math.sin(t.current * 1.15) * .04, 4, d);
		const lookX = pointer.x * .12;
		const lookY = -pointer.y * .1;
		group.rotation.y = MathUtils.damp(group.rotation.y, .18 + lookX, 2.4, d);
		group.rotation.x = MathUtils.damp(group.rotation.x, -.08 + lookY * .3, 2.4, d);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: root,
		position: [
			isMobile ? -.22 : -1.22,
			isMobile ? -.28 : -.12,
			isMobile ? .35 : .15
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: inner,
			rotation: [
				-.08,
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
				.15,
				4.2
			],
			fov: isMobile ? 42 : 30
		},
		shadows: !isMobile,
		onCreated: ({ gl }) => {
			gl.toneMapping = 4;
			gl.toneMappingExposure = 1.22;
			gl.setClearColor(0, 0);
			gl.shadowMap.type = 1;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#ffe6c8",
				"#2a1016",
				.9
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					2.4,
					5.2,
					3.4
				],
				intensity: 2.2,
				color: "#ffe1b5",
				castShadow: !isMobile
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-2.2,
					1.4,
					2.2
				],
				intensity: .7,
				color: "#fff1dc"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					.2,
					4,
					3.6
				],
				intensity: 26,
				angle: .42,
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
				opacity: .32,
				scale: 6,
				blur: 2.4,
				far: 2.5
			}) : null
		]
	});
}
//#endregion
export { ParrotStage };
