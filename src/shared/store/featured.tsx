export interface feature {
  id: number|string; // Unique identifier
  name: string; // Product name
  category: "men" | "women" | "bag" | "shoes" | "watches";
  type: string; // T-SHIRT, CASUAL SHOES, LEATHER, etc.
  description?: string;
  image: {
    desktop: string[];
  };
  price: number;
}

export const features: feature[] = [
  {
    id: 1,
    name: "Hooded T-Shirt",
    category: "men",
    type: "T-SHIRT",
    description: "Upgrade your casual wardrobe with our premium hooded t-shirt. Crafted from soft, breathable cotton-blend fabric, this t-shirt provides all-day comfort while maintaining a modern, sporty look.",
    image: {
      desktop: [
        "/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt-2.jpg",
        "/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt-4.jpg",
        "/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt-5.jpg",
        "/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt.jpg",
      ],
    },
    price: 80,
  },
  {
    id: 2,
    name: "Blouson Top",
    category: "women",
    type: "SHORTS & SKIRTS",
    image: {
      desktop: ["/image/women/Women-Off-White-Printed-Blouson-Top-2.jpg"],
    },
    price: 80,
  },
  {
    id: 3,
    name: "Graphic Backpack",
    category: "bag",
    type: "LUGGAGE & TRAVEL",
    image: {
      desktop: ["/image/bag/Unisex-Blue-Graphic-Backpack.jpg"],
    },
    price: 80,
  },
  {
    id: 4,
    name: "Mid-Top Sneakers",
    category: "shoes",
    type: "CASUAL SHOES",
    image: {
      desktop: ["/image/shoes/Men-Blue-Colourblocked-Mid-Top-Sneakers-2.jpg"],
    },
    price: 80,
  },
  {
    id: 5,
    name: "Analog Watch",
    category: "watches",
    type: "LEATHER",
    image: {
      desktop: [
        "/image/watches/Navy-BlueSilver-White-Multifunction-Analog-Watch-2.jpg",
      ],
    },
    price: 80,
  },
];
