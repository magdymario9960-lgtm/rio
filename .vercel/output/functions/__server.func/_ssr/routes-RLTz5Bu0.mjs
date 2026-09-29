import { i as __toESM } from "../_runtime.mjs";
import { d as require_jsx_runtime, f as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-RLTz5Bu0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var useRioStore = create()(persist((set) => ({
	branchId: null,
	setBranchId: (id) => set({ branchId: id }),
	pointer: {
		x: 0,
		y: 0
	},
	setPointer: (pointer) => set({ pointer }),
	scroll: 0,
	setScroll: (scroll) => set({ scroll }),
	lookAt: null,
	setLookAt: (lookAt) => set({ lookAt }),
	pulse: 0,
	triggerPulse: () => set((s) => ({ pulse: s.pulse + 1 })),
	menuOpen: false,
	setMenuOpen: (menuOpen) => set({ menuOpen })
}), {
	name: "rio-cafe-branch",
	partialize: (s) => ({ branchId: s.branchId }),
	skipHydration: true
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function LoadingScreen({ visible }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grain fixed inset-0 z-50 grid place-items-center bg-wine-deep transition-opacity duration-700 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`,
		"aria-hidden": !visible,
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "breath-ring absolute -inset-4 rounded-full border border-gold/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo.jpg",
						alt: "Rio Cafe",
						className: "size-36 rounded-full object-cover shadow-[0_0_0_1px_rgb(201_164_108_/_40%),0_20px_50px_rgb(0_0_0_/_40%)] md:size-44"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-4xl gold-text md:text-5xl",
					children: "Rio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ivory-dim",
					children: "بنجهّز تجربتك في ريو"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 h-px w-32 overflow-hidden bg-gold/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full w-1/2 bg-gold-bright",
						style: { animation: "load-slide 1.4s ease-in-out infinite" }
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes load-slide { from { transform: translateX(-120%); } to { transform: translateX(220%); } }` })]
	});
}
var SOCIAL = {
	instagram: "https://www.instagram.com/riocafe.eg1",
	tiktok: "https://www.tiktok.com/@rio.cafe1"
};
var BRANCHES = {
	alAslougy: {
		id: "alAslougy",
		nameAr: "العصلوجي",
		menuKind: "image",
		menuImage: "/menus/al-aslougy.jpg",
		phone: "+201214265158",
		phoneDisplay: "012 1426 5158",
		mapsUrl: null,
		reviewUrl: null,
		locationLabel: "فرع العصلوجي",
		photo: "/branches/al-aslougy.png"
	},
	villas: {
		id: "villas",
		nameAr: "الفلل",
		menuKind: "pdf",
		menuPdf: "/menus/villas.pdf",
		menuPages: [
			"/menus/villas-1.jpg",
			"/menus/villas-2.jpg",
			"/menus/villas-3.jpg",
			"/menus/villas-4.jpg",
			"/menus/villas-5.jpg"
		],
		phone: null,
		phoneDisplay: null,
		mapsUrl: null,
		reviewUrl: null,
		locationLabel: "فرع الفلل",
		photo: "/branches/villas.jpg"
	}
};
var BRANCH_ORDER = ["alAslougy", "villas"];
var SLOGAN = "لحظاتك الجميلة بتبدأ في ريو";
var GOODBYE = "نشوفك قريب في ريو";
function GoldFlourish({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 28",
		className,
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 14h62",
				stroke: "currentColor",
				strokeWidth: "1.2",
				strokeLinecap: "round",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 14h62",
				stroke: "currentColor",
				strokeWidth: "1.2",
				strokeLinecap: "round",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 6c8 4 12 8 0 16-12-8-8-12 0-16Z",
				fill: "currentColor",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "14",
				r: "2.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 14c6-8 12-8 18 0M110 14c6 8 12 8 18 0",
				stroke: "currentColor",
				strokeWidth: "1.1",
				opacity: "0.8"
			})
		]
	});
}
function AlwaysOpenSeal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative size-20 rounded-full bg-wine-deep/85 shadow-[0_0_0_1px_rgb(201_164_108_/_45%),0_0_24px_rgb(201_164_108_/_18%)] md:size-24",
		"aria-label": "مفتوح 24/7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 120 120",
			className: "seal-spin size-full text-gold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					id: "seal-circle",
					d: "M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "57",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.2",
					opacity: "0.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "46",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "0.8",
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					fill: "currentColor",
					fontSize: "9",
					letterSpacing: "3",
					fontFamily: "Cairo, sans-serif",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
						href: "#seal-circle",
						children: "OPEN · 24 HOURS · مفتوح دائماً ·"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center leading-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg text-gold-bright md:text-xl",
					children: "24/7"
				})
			})
		})]
	});
}
function BranchSelector({ open, onDone }) {
	const setBranchId = useRioStore((s) => s.setBranchId);
	const triggerPulse = useRioStore((s) => s.triggerPulse);
	const choose = (id) => {
		setBranchId(id);
		triggerPulse();
		onDone?.();
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grain fixed inset-0 z-40 grid place-items-center overflow-auto bg-wine-deep/92 px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-lux text-gold",
					children: "RIO CAFE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-sans text-3xl text-ivory md:text-5xl",
					children: "إنت في أنهي فرع؟"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mx-auto mt-5 h-7 w-52 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-ivory-dim",
					children: "اختار الفرع مرّة واحدة، والموقع هيفتكر اختيارك."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: BRANCH_ORDER.map((id) => {
						const b = BRANCHES[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => choose(id),
							className: "group overflow-hidden rounded-2xl bg-wine text-start shadow-[var(--shadow-gold)] transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-[0.96]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "photo-frame relative aspect-[4/3] rounded-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.photo,
									alt: b.locationLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl text-ivory",
										children: b.locationLabel
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs tracking-lux text-gold",
									children: "BRANCH"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-2xl text-ivory",
									children: b.nameAr
								})]
							})]
						}, id);
					})
				})
			]
		})
	});
}
function base({ size = 22, ...props }) {
	return {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		...props
	};
}
function InstagramIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.2",
				y: "3.2",
				width: "17.6",
				height: "17.6",
				rx: "5",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4.1",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.2",
				cy: "6.8",
				r: "1",
				fill: "currentColor"
			})
		]
	});
}
function TikTokIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14.2 3.2c.5 3.3 2.2 5 5.3 5.3v3.1c-1.8.1-3.4-.4-5.3-1.5v6.6c0 4.3-3.3 6.6-6.7 6.6-3.3 0-6.3-2.3-6.3-6.3 0-4.2 3.2-6.5 6.5-6.5.4 0 .9 0 1.3.1v3.3c-.4-.1-.8-.2-1.3-.2-1.9 0-3.4 1.2-3.4 3.3 0 2 1.4 3.2 3.3 3.2 1.9 0 3.2-1.1 3.2-3.5V3.2h3.4Z",
			fill: "currentColor"
		})
	});
}
function PhoneIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7.2 3.8c.4-.5 1.2-.6 1.7-.2l2.1 1.6c.5.4.6 1.1.3 1.6L10.4 9c1.4 2.4 2.9 3.9 5.2 5.2l1.9-.9c.5-.3 1.2-.2 1.6.3l1.6 2.1c.4.6.3 1.3-.2 1.7l-1.5 1.2c-.6.5-1.5.7-2.3.5-3.7-.8-7.4-3.6-10.5-8S3.2 6.2 4.1 2.6c.2-.8.8-1.4 1.6-1.6L7.2 3.8Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinejoin: "round"
		})
	});
}
function PinIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 21s6.5-5.2 6.5-11A6.5 6.5 0 0 0 5.5 10C5.5 15.8 12 21 12 21Z",
			stroke: "currentColor",
			strokeWidth: "1.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10",
			r: "2.2",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})]
	});
}
function StarIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "m12 3.2 2.4 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.1 6.9 18.6l1.1-5.6-4.2-3.9 5.7-.7L12 3.2Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinejoin: "round"
		})
	});
}
function MenuBookIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 5.5c2.4-1.2 4.8-1.2 7.2 0v13c-2.4-1.2-4.8-1.2-7.2 0v-13Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12.8 5.5c2.4-1.2 4.8-1.2 7.2 0v13c-2.4-1.2-4.8-1.2-7.2 0v-13Z",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinejoin: "round"
		})]
	});
}
function HomeIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 11.2 12 4.5l8 6.7",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6.2 10.2V19h11.6v-8.8",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})]
	});
}
function DownloadIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 4.5v10",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "m8 11.5 4 4 4-4",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 19h14",
				stroke: "currentColor",
				strokeWidth: "1.6"
			})
		]
	});
}
function ExpandIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9 5H5v4M15 5h4v4M9 19H5v-4M15 19h4v-4",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
function CloseIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 6 18 18M18 6 6 18",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
function HeartIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...base(props),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 19.4s-7.2-4.4-7.2-9.2A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 7.2 2.8c0 4.8-7.2 9.2-7.2 9.2Z",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinejoin: "round"
		})
	});
}
var ITEMS = [
	{
		id: "hero",
		label: "الرئيسية",
		Icon: HomeIcon
	},
	{
		id: "menu",
		label: "المنيو",
		Icon: MenuBookIcon
	},
	{
		id: "social",
		label: "تابعنا",
		Icon: InstagramIcon
	},
	{
		id: "contact",
		label: "تواصل معنا",
		Icon: PhoneIcon
	},
	{
		id: "location",
		label: "موقعنا",
		Icon: PinIcon
	}
];
function go(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Navigation({ onSwitchBranch }) {
	const branchId = useRioStore((s) => s.branchId);
	const branch = branchId ? BRANCHES[branchId] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onSwitchBranch,
			className: "nav-pill pointer-events-auto fixed top-4 start-4 z-30 rounded-full px-3 py-2 text-xs text-gold-bright md:hidden",
			"aria-label": "تغيير الفرع",
			children: branch.nameAr
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "nav-pill pointer-events-auto fixed top-4 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 md:flex",
			"aria-label": "التنقل",
			children: [ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => go(item.id),
				className: "rounded-full px-4 py-2 text-sm text-ivory-dim transition-colors duration-200 hover:bg-ivory/10 hover:text-ivory",
				children: item.label
			}, item.id)), branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onSwitchBranch,
				className: "ms-1 rounded-full bg-gold/15 px-3 py-2 text-xs text-gold-bright",
				"aria-label": "تغيير الفرع",
				children: branch.nameAr
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "nav-pill pointer-events-auto fixed inset-x-4 bottom-4 z-30 flex items-center justify-around rounded-2xl px-2 py-2 md:hidden",
			"aria-label": "التنقل",
			style: { paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" },
			children: ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(item.id),
				className: "flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 rounded-xl text-ivory-dim",
				"aria-label": item.label,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px]",
					children: item.label
				})]
			}, item.id))
		})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/gallery/lounge-sign.jpg",
					alt: "",
					className: "size-full object-cover opacity-25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-wine-deep)_72%)]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-xl flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-full border border-gold/35" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/logo.jpg",
							alt: "Rio Cafe",
							className: "size-40 rounded-full object-cover shadow-[0_20px_60px_rgb(0_0_0_/_45%)] md:size-52"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-8 font-display text-6xl leading-none gold-text md:text-8xl",
						children: "Rio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl tracking-[0.4em] text-ivory md:text-3xl",
						children: "CAFE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mt-6 h-7 w-56 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-6 max-w-md text-lg text-ivory md:text-2xl",
						style: { animationDelay: "280ms" },
						children: SLOGAN
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-lux text-gold-bright",
				onClick: () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }),
				children: "ادخل ريو"
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setOn(true);
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", on && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function magnetize(e, disabled, magnetic) {
	if (!magnetic || prefersReducedMotion() || disabled) return;
	const el = e.currentTarget;
	const r = el.getBoundingClientRect();
	const x = e.clientX - r.left - r.width / 2;
	const y = e.clientY - r.top - r.height / 2;
	el.style.transform = `translate(${x * .18}px, ${y * .22}px)`;
}
function reset(e) {
	e.currentTarget.style.transform = "";
}
function RioButton({ children, className, variant = "gold", href, download, onClick, type = "button", disabled, magnetic = true, ariaLabel, target, rel }) {
	const cls = cn("rio-btn", variant === "gold" ? "rio-btn-gold" : "rio-btn-ghost", className);
	if (href && !disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cls,
		href,
		download,
		onClick,
		onMouseMove: (e) => magnetize(e, disabled, magnetic),
		onMouseLeave: reset,
		"aria-label": ariaLabel,
		target,
		rel,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cls,
		type,
		onClick,
		onMouseMove: (e) => magnetize(e, disabled, magnetic),
		onMouseLeave: reset,
		disabled,
		"aria-label": ariaLabel,
		children
	});
}
function MenuSection() {
	const branchId = useRioStore((s) => s.branchId) ?? "alAslougy";
	const setLookAt = useRioStore((s) => s.setLookAt);
	const [active, setActive] = (0, import_react.useState)(branchId);
	const [open, setOpen] = (0, import_react.useState)(true);
	const [lightbox, setLightbox] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(0);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		setActive(branchId);
		setOpen(true);
		setPage(0);
	}, [branchId]);
	const branch = BRANCHES[active];
	const pages = branch.menuKind === "pdf" ? branch.menuPages ?? [] : branch.menuImage ? [branch.menuImage] : [];
	const current = pages[Math.min(page, pages.length - 1)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "menu",
		className: "relative px-5 py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-lux text-gold",
							children: "THE MENU"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl text-ivory md:text-5xl",
							children: "المنيو"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mx-auto mt-4 h-7 w-52 text-gold" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: BRANCH_ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
						variant: active === id ? "gold" : "ghost",
						onClick: () => {
							setActive(id);
							setOpen(true);
							setPage(0);
							setLookAt("menu");
						},
						ariaLabel: `منيو ${BRANCHES[id].nameAr}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuBookIcon, { size: 18 }),
							"منيو ",
							BRANCHES[id].nameAr
						]
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl bg-wine p-3 shadow-[var(--shadow-gold)] md:p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-ivory-dim",
										children: ["منيو ", branch.nameAr]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [branch.menuPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
											href: branch.menuPdf,
											download: true,
											variant: "ghost",
											className: "min-h-11 px-4 py-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadIcon, { size: 16 }), "تحميل"]
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
											variant: "ghost",
											className: "min-h-11 px-4 py-2 text-sm",
											onClick: () => setLightbox(true),
											ariaLabel: "عرض أكبر",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandIcon, { size: 16 }), "تكبير"]
										})]
									})]
								}),
								current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-auto rounded-xl bg-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: current,
										alt: `منيو ${branch.nameAr}`,
										className: "mx-auto max-h-[80vh] w-full object-contain"
									})
								}) : null,
								pages.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex items-center justify-center gap-2",
									children: pages.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPage(i),
										className: cn("size-2 rounded-full transition-transform", i === page ? "scale-125 bg-gold" : "bg-ivory/30"),
										"aria-label": `صفحة ${i + 1}`
									}, src))
								}) : null
							]
						})
					})
				})
			]
		}), lightbox && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] bg-ink/92 p-3",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "عرض المنيو",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-full max-w-5xl flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RioButton, {
								variant: "ghost",
								className: "min-h-11 px-4",
								onClick: () => setZoom((z) => Math.min(3, z + .25)),
								children: "+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RioButton, {
								variant: "ghost",
								className: "min-h-11 px-4",
								onClick: () => setZoom((z) => Math.max(1, z - .25)),
								children: "−"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-full text-ivory",
							onClick: () => {
								setLightbox(false);
								setZoom(1);
							},
							"aria-label": "إغلاق",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-auto",
						style: { touchAction: "pinch-zoom" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: current,
							alt: `منيو ${branch.nameAr}`,
							className: "mx-auto origin-top",
							style: {
								width: `${zoom * 100}%`,
								maxWidth: "none"
							}
						})
					}),
					pages.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-2 py-3",
						children: pages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPage(i),
							className: cn("rounded-full px-3 py-2 text-sm", i === page ? "bg-gold text-ink" : "text-ivory-dim"),
							children: i + 1
						}, i))
					}) : null
				]
			})
		}) : null]
	});
}
function SocialSection() {
	const setLookAt = useRioStore((s) => s.setLookAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "social",
		className: "relative overflow-hidden px-5 py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/gallery/macaw-mural.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-wine-deep/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-lux text-gold",
						children: "FOLLOW US"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl text-ivory md:text-5xl",
						children: "تابعنا"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mx-auto mt-4 h-7 w-52 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ivory-dim",
						children: "نفس الحساب لكل الفروع — ريو واحد، مزاج واحد."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
						href: SOCIAL.instagram,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setLookAt("social"),
						ariaLabel: "إنستجرام ريو كافيه",
						className: "min-w-52",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {}), "Instagram"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
						href: SOCIAL.tiktok,
						target: "_blank",
						rel: "noopener noreferrer",
						variant: "ghost",
						onClick: () => setLookAt("social"),
						ariaLabel: "تيك توك ريو كافيه",
						className: "min-w-52",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokIcon, {}), "TikTok"]
					})]
				})]
			})
		]
	});
}
function ContactSection() {
	const branchId = useRioStore((s) => s.branchId);
	const setLookAt = useRioStore((s) => s.setLookAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative px-5 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-lux text-gold",
						children: "CONTACT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl text-ivory md:text-5xl",
						children: "تواصل معنا"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mx-auto mt-4 h-7 w-52 text-gold" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: BRANCH_ORDER.map((id) => {
					const b = BRANCHES[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("rounded-2xl bg-wine p-6 shadow-[var(--shadow-soft)]", branchId === id && "shadow-[var(--shadow-gold)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-lux text-gold",
								children: "فرع"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-2xl text-ivory",
								children: b.nameAr
							}),
							b.phone && b.phoneDisplay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-xl text-gold-bright",
								dir: "ltr",
								children: b.phoneDisplay
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
								href: `tel:${b.phone}`,
								className: "mt-6 w-full",
								onClick: () => setLookAt("contact"),
								ariaLabel: `اتصل بفرع ${b.nameAr}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, { size: 18 }), "اتصل بنا"]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-ivory-dim",
								children: "رقم الفرع هيتحط هنا أول ما يتوفر."
							})
						]
					}) }, id);
				})
			})]
		})
	});
}
function LocationSection() {
	const branchId = useRioStore((s) => s.branchId) ?? "alAslougy";
	const setLookAt = useRioStore((s) => s.setLookAt);
	const branch = BRANCHES[branchId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "location",
		className: "relative px-5 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo-frame aspect-[4/5] md:aspect-[4/4.4]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: branch.photo,
					alt: branch.locationLabel,
					loading: "lazy"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-lux text-gold",
						children: "LOCATION"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl text-ivory",
						children: "موقعنا"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mt-4 h-7 w-44 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-2xl text-ivory",
						children: branch.locationLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-ivory-dim",
						children: [
							"فرع ",
							branch.nameAr,
							" — المكان اللي لحظاتك الجميلة بتبدأ فيه."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [branch.mapsUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
							href: branch.mapsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => setLookAt("location"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinIcon, { size: 18 }), "الخريطة"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
							disabled: true,
							variant: "ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinIcon, { size: 18 }), "الخريطة"]
						}), branch.reviewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
							href: branch.reviewUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							variant: "ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 18 }), "قولنا رأيك"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RioButton, {
							disabled: true,
							variant: "ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 18 }), "قولنا رأيك"]
						})]
					}),
					!branch.mapsUrl && !branch.reviewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-ivory-dim",
						children: "لينك الخريطة والتقييم هيتضافوا للفرع أول ما يتوفروا."
					}) : null
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative px-5 pb-28 pt-16 text-center md:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/logo.jpg",
				alt: "Rio Cafe",
				className: "mx-auto size-20 rounded-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-display text-4xl gold-text",
				children: "Rio Cafe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldFlourish, { className: "mx-auto mt-4 h-7 w-44 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 inline-flex items-center justify-center gap-2 text-lg text-ivory",
				children: [GOODBYE, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartIcon, {
					size: 18,
					className: "text-macaw"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[11px] tracking-[0.18em] text-ivory-dim/70",
				children: "powered by Globalim"
			})
		]
	});
}
function canUseWebGL() {
	try {
		const canvas = document.createElement("canvas");
		return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
	} catch {
		return false;
	}
}
function ParrotCanvas() {
	const [Stage, setStage] = (0, import_react.useState)(null);
	const [fallback, setFallback] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!canUseWebGL()) {
			setFallback(true);
			return;
		}
		let alive = true;
		import("./parrot-stage-DuTIXBcG.mjs").then((mod) => {
			if (alive) setStage(() => mod.ParrotStage);
		});
		return () => {
			alive = false;
		};
	}, []);
	if (fallback) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-[1] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/gallery/macaw-mural.jpg",
			alt: "",
			className: "absolute start-[-10%] top-[18%] w-[52%] max-w-sm rounded-full opacity-70 md:top-[12%] md:w-[34%]"
		})
	});
	if (!Stage) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-[1]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {})
	});
}
var PALETTE = [
	"text-blush",
	"text-macaw",
	"text-ivory",
	"text-gold"
];
var LEAVES = Array.from({ length: 22 }, (_, i) => ({
	left: `${i * 17 % 98 + 1}%`,
	delay: `${(i * .73 % 11).toFixed(2)}s`,
	duration: `${12 + i % 7}s`,
	size: 14 + i % 6 * 4,
	drift: `${-48 + i % 9 * 12}px`,
	spin: `${i % 2 === 0 ? "" : "-"}${220 + i % 5 * 70}deg`,
	color: PALETTE[i % PALETTE.length],
	sway: `${6 + i % 5}s`,
	opacity: .38 + i % 5 * .08
}));
function Petal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 40",
		className: "size-full",
		fill: "currentColor",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 1.5c2.6 6.4 11.2 10 11.2 20.2 0 8.2-5.4 14.6-11.2 16.8C10.2 36.3 4.8 29.9 4.8 21.7 4.8 11.5 13.4 7.9 16 1.5Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 6.5v28",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.1",
			opacity: "0.35"
		})]
	});
}
function FallingLeaves() {
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!prefersReducedMotion()) setEnabled(true);
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-[5] overflow-hidden",
		"aria-hidden": "true",
		children: LEAVES.map((leaf, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `leaf-fall absolute top-[-8%] ${leaf.color}`,
			style: {
				left: leaf.left,
				width: leaf.size,
				height: leaf.size * 1.25,
				opacity: leaf.opacity,
				["--leaf-delay"]: leaf.delay,
				["--leaf-duration"]: leaf.duration,
				["--leaf-drift"]: leaf.drift,
				["--leaf-spin"]: leaf.spin,
				["--leaf-sway"]: leaf.sway
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leaf-sway block size-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petal, {})
			})
		}, i))
	});
}
function Experience() {
	const branchId = useRioStore((s) => s.branchId);
	const setPointer = useRioStore((s) => s.setPointer);
	const setScroll = useRioStore((s) => s.setScroll);
	const [booted, setBooted] = (0, import_react.useState)(false);
	const [choosing, setChoosing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const started = performance.now();
		const img = new Image();
		img.src = "/brand/logo.jpg";
		let imgReady = img.complete;
		let storeReady = false;
		const maybeDone = () => {
			if (!imgReady || !storeReady) return;
			const wait = Math.max(0, 1100 - (performance.now() - started));
			window.setTimeout(() => setBooted(true), wait);
		};
		Promise.resolve(useRioStore.persist.rehydrate()).then(() => {
			storeReady = true;
			maybeDone();
		});
		const doneImg = () => {
			imgReady = true;
			maybeDone();
		};
		if (!img.complete) {
			img.onload = doneImg;
			img.onerror = doneImg;
		}
		const cap = window.setTimeout(() => setBooted(true), 5200);
		return () => window.clearTimeout(cap);
	}, []);
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			setPointer({
				x: e.clientX / window.innerWidth * 2 - 1,
				y: e.clientY / window.innerHeight * 2 - 1
			});
		};
		const onScroll = () => {
			const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
			setScroll(window.scrollY / max);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("scroll", onScroll);
		};
	}, [setPointer, setScroll]);
	const showChooser = booted && (!branchId || choosing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grain relative min-h-svh bg-wine-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#menu",
				className: "skip-link",
				children: "تخطي إلى المنيو"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParrotCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallingLeaves, {}),
			booted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed top-4 end-4 z-30 md:top-6 md:end-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlwaysOpenSeal, {})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), branchId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[40vh]" })]
			}),
			booted && branchId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { onSwitchBranch: () => setChoosing(true) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchSelector, {
				open: showChooser,
				onDone: () => setChoosing(false)
			}),
			showChooser && branchId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "fixed top-5 start-5 z-50 rounded-full bg-wine-mid px-4 py-2 text-sm text-ivory",
				onClick: () => setChoosing(false),
				children: "رجوع"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { visible: !booted })
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {});
}
//#endregion
export { prefersReducedMotion as n, useRioStore as r, routes_exports as t };
