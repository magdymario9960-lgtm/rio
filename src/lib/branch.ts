export type BranchId = "alAslougy" | "villas";
export type MenuKind = "image" | "pdf";

export type Branch = {
  id: BranchId;
  nameAr: string;
  menuKind: MenuKind;
  menuImage?: string;
  menuPdf?: string;
  menuPages?: readonly string[];
  phone: string | null;
  phoneDisplay: string | null;
  mapsUrl: string | null;
  reviewUrl: string | null;
  locationLabel: string;
  photo: string;
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/riocafe.eg1",
  tiktok: "https://www.tiktok.com/@rio.cafe1",
} as const;

export const BRANCHES: Record<BranchId, Branch> = {
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
    photo: "/branches/al-aslougy.png",
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
      "/menus/villas-5.jpg",
    ],
    phone: null, // PHONE_NUMBER_TO_BE_PROVIDED
    phoneDisplay: null,
    mapsUrl: null, // VILLAS_MAP_URL_TO_BE_PROVIDED
    reviewUrl: null, // VILLAS_REVIEW_URL_TO_BE_PROVIDED
    locationLabel: "فرع الفلل",
    photo: "/branches/villas.jpg",
  },
};

export const BRANCH_ORDER: BranchId[] = ["alAslougy", "villas"];

export const SLOGAN = "لحظاتك الجميلة بتبدأ في ريو";
export const GOODBYE = "نشوفك قريب في ريو";
