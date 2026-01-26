export  interface feature {
  name: string;
  description: string;
  category: string;
  image: {
    desktop: string;
  };
  price: number;
}

export const features: feature [] = [
  {
    name: "men",
    description: "",
    category: "T-SHIRT",
    image: { desktop: "/public/image/men/Solid-Men-Hooded-Blue-Grey-T-Shirt-2.jpg" },
    price: 80,
  },
  {
    name: "women",
    description: "",
    category: "SHORTS & SKIRTS",
    image: { desktop: "/public/image/women/Women-Off-White-Printed-Blouson-Top-2.jpg" },
    price: 80,
  },
  {
    name: "Bag",
    description: "",
    category: "LUGGAGE & TRAVEL",
    image: { desktop: "/public/image/bag/Unisex-Blue-Graphic-Backpack.jpg" },
    price: 80,
  },
  {
    name: "Shoes",
    description: "",
    category: "CASUAL SHOES",
    image: { desktop: "/public/image/shoes/Men-Blue-Colourblocked-Mid-Top-Sneakers-2.jpg" },
    price: 80,
  },
  {
    name: "Watches",
    description: "",
    category: "LEATHER",
    image: { desktop: "/public/image/watches/Navy-BlueSilver-White-Multifunction-Analog-Watch-2.jpg" },
    price: 80,
  },
];