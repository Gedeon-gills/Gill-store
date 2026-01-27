export interface feature {
  name: string;        // Product name (optional display)
  description: string;
  category: "men" | "women" | "bag" | "shoes" | "watches";
  type: string;        // T-SHIRT, CASUAL SHOES, LEATHER, etc.
  image: {
    desktop: string;
  };
  price: number;
}

export const features: feature[] = [
  {
    name: "Hooded T-Shirt",
    description: "",
    category: "men",
    type: "T-SHIRT",
    image: {
      desktop: "/public/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt-2.jpg",
    },
    price: 80,
  },
  {
    name: "Blouson Top",
    description: "",
    category: "women",
    type: "SHORTS & SKIRTS",
    image: {
      desktop:
        "/public/image/women/Women-Off-White-Printed-Blouson-Top-2.jpg",
    },
    price: 80,
  },
  {
    name: "Graphic Backpack",
    description: "",
    category: "bag",
    type: "LUGGAGE & TRAVEL",
    image: {
      desktop: "/public/image/bag/Unisex-Blue-Graphic-Backpack.jpg",
    },
    price: 80,
  },
  {
    name: "Mid-Top Sneakers",
    description: "",
    category: "shoes",
    type: "CASUAL SHOES",
    image: {
      desktop:
        "/public/image/shoes/Men-Blue-Colourblocked-Mid-Top-Sneakers-2.jpg",
    },
    price: 80,
  },
  {
    name: "Analog Watch",
    description: "",
    category: "watches",
    type: "LEATHER",
    image: {
      desktop:
        "/public/image/watches/Navy-BlueSilver-White-Multifunction-Analog-Watch-2.jpg",
    },
    price: 80,
  },
];
