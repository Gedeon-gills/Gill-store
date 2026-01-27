export interface Category {
  name: string;
  image: {
    desktop: string;
  };
}

export const categories: Category[] = [
  {
    name: "men",
    image: {
      desktop: "/public/image/men/Men-Navy-Blue-Grey-Colour-Jacket-1.jpg",
    },
  },
  {
    name: "women",
    image: {
      desktop: "/public/image/women/black girl suit.jpg",
    },
  },
  {
    name: "jewellery",
    image: {
      desktop:
        "/public/image/jewellery/Gold-Toned-Alloy-Gold-Plated-Cuff-Bracelet-2.jpg",
    },
  },
  {
    name: "bag",
    image: {
      desktop: "/public/image/bag/Unisex-Blue-Graphic-Backpack.jpg",
    },
  },
  {
    name: "shoes",
    image: {
      desktop:
        "/public/image/shoes/Men-Blue-Colourblocked-Mid-Top-Sneakers-2.jpg",
    },
  },
  {
    name: "watches",
    image: {
      desktop: "/public/image/watches/Men-Black-Analogue-Watch-3.jpg",
    },
  },
];