import { food_list as localAssetFoodList, menu_list } from "../assets/frontend_assets/assets";

export const categories = [
  "Salad",
  "Rolls",
  "Desserts",
  "Sandwich",
  "Cake",
  "Pure Veg",
  "Pasta",
  "Noodles",
  "Mughlai",
  "Thali",
  "Pizzas",
  "Burgers",
  "Momos",
];

const normalizeCategory = (value = "") =>
  value.trim().toLowerCase().replace("deserts", "desserts");

const localImagesByCategory = localAssetFoodList.reduce((acc, item) => {
  const key = normalizeCategory(item.category);
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item.image);
  return acc;
}, {});

const menuImageByCategory = menu_list.reduce((acc, item) => {
  acc[normalizeCategory(item.menu_name)] = item.menu_image;
  return acc;
}, {});

const namesByCategory = {
  Salad: [
    "Greek Salad",
    "Caesar Salad",
    "Pasta Salad",
    "Fruit Salad",
    "Garden Salad",
    "Cobb Salad",
    "Mediterranean Salad",
    "Quinoa Salad",
    "Avocado Salad",
    "Chickpea Salad",
  ],
  Rolls: [
    "Chicken Shawarma",
    "Veg Spring Roll",
    "Kolkata Kathi Roll",
    "Egg Roll",
    "Paneer Roll",
    "Cheese Corn Roll",
    "Mayo Chicken Roll",
    "Falafel Wrap Roll",
    "Spicy Tandoori Roll",
    "Double Egg Chicken Roll",
  ],
  Desserts: [
    "Chocolate Brownie",
    "Vanilla Ice Cream",
    "Gulab Jamun",
    "Blueberry Cheesecake",
    "Hot Chocolate Lava Cake",
    "Rasmalai",
    "Tiramisu Cup",
    "Caramel Custard",
    "Fruit Trifle",
    "Kulfi Falooda",
  ],
  Sandwich: [
    "Veg Sandwich",
    "Grilled Sandwich",
    "Club Sandwich",
    "Paneer Tikka Sandwich",
    "Chicken Mayo Sandwich",
    "Corn Cheese Sandwich",
    "Bombay Masala Sandwich",
    "BBQ Chicken Sandwich",
    "Mushroom Melt Sandwich",
    "Egg and Lettuce Sandwich",
  ],
  Cake: [
    "Chocolate Cake",
    "Red Velvet Cake",
    "Black Forest Cake",
    "Vanilla Sponge Cake",
    "Butterscotch Cake",
    "Pineapple Cream Cake",
    "Coffee Walnut Cake",
    "Strawberry Cake",
    "Choco Chips Tea Cake",
    "Carrot Walnut Cake",
  ],
  "Pure Veg": [
    "Paneer Butter Masala",
    "Dal Makhani",
    "Veg Biryani",
    "Shahi Paneer",
    "Chole Masala",
    "Mix Veg Curry",
    "Palak Paneer",
    "Aloo Jeera",
    "Veg Korma",
    "Malai Kofta",
  ],
  Pasta: [
    "Creamy Alfredo Pasta",
    "Spicy Arrabbiata",
    "Pesto Pasta",
    "Pink Sauce Pasta",
    "Garlic Mushroom Pasta",
    "Cheesy White Sauce Pasta",
    "Classic Mac and Cheese",
    "BaMEE Basil Penne",
    "Baked Pasta",
    "Herb Butter Pasta",
  ],
  Noodles: [
    "Veg Hakka Noodles",
    "Chicken Hakka Noodles",
    "Ramen",
    "Chilli Garlic Noodles",
    "Schezwan Noodles",
    "Singapore Noodles",
    "Butter Garlic Noodles",
    "Egg Noodles",
    "Thai Peanut Noodles",
    "Paneer Chilli Noodles",
  ],
  Mughlai: [
    "Chicken Biryani",
    "Mutton Korma",
    "Butter Chicken",
    "Chicken Tikka",
    "Nihari",
    "Rogan Josh",
    "Seekh Kebab",
    "Shahi Paneer",
    "Mughlai Paratha",
    "Keema Naan",
  ],
  Thali: [
    "Veg Thali",
    "North Indian Thali",
    "South Indian Thali",
    "Bengali Thali",
    "Gujarati Thali",
    "Rajasthani Thali",
    "Mini Thali",
    "Deluxe Thali",
    "Jain Thali",
    "Punjabi Thali",
  ],
  Pizzas: [
    "Margherita Pizza",
    "Farmhouse Pizza",
    "Pepperoni Pizza",
    "Veggie Supreme",
    "BBQ Chicken Pizza",
    "Paneer Tikka Pizza",
    "Hawaiian Pizza",
    "Cheese Burst Pizza",
    "Mushroom Pizza",
    "Spicy Chicken Pizza",
  ],
  Burgers: [
    "Veg Burger",
    "Chicken Burger",
    "Cheese Burger",
    "Double Patty Burger",
    "Paneer Burger",
    "Crispy Chicken Burger",
    "BBQ Burger",
    "Aloo Tikki Burger",
    "Mushroom Burger",
    "Classic Beef Burger",
  ],
  Momos: [
    "Veg Momos",
    "Chicken Momos",
    "Fried Momos",
    "Tandoori Momos",
    "Paneer Momos",
    "Cheese Momos",
    "Chilli Momos",
    "Steamed Momos",
    "Schezwan Momos",
    "Chocolate Momos",
  ],
};

const descriptions = {
  Salad: "Fresh and crisp bowl loaded with nutritious ingredients.",
  Rolls: "Stuffed, wrapped, and packed with bold flavor in every bite.",
  Desserts: "Sweet treats crafted to end your meal on a high note.",
  Sandwich: "Perfectly layered sandwich made with fresh fillings.",
  Cake: "Soft, rich, and delightful slices for every celebration.",
  "Pure Veg": "Wholesome vegetarian main-course favorites.",
  Pasta: "Creamy and saucy pasta plates cooked to comfort.",
  Noodles: "Wok-tossed noodles with vibrant sauces and toppings.",
  Mughlai: "Rich, aromatic Mughlai classics layered with royal spices.",
  Thali: "Balanced regional platters served with comforting sides.",
  Pizzas: "Oven-baked pizzas topped with generous cheese and sauces.",
  Burgers: "Stacked burgers with satisfying patties, sauces, and crunch.",
  Momos: "Soft dumplings served with bold chutneys and fillings.",
};

const imageThemes = {
  Salad: ["#dff7df", "#327a45", "#f8fff7"],
  Rolls: ["#ffe8c9", "#9a4f1f", "#fff9ef"],
  Desserts: ["#ffe2f0", "#8a3c72", "#fff7fb"],
  Sandwich: ["#f5e4c7", "#6d4a25", "#fffaf1"],
  Cake: ["#ffdbe7", "#b24562", "#fff8fb"],
  "Pure Veg": ["#e8f5d1", "#527d2a", "#fbfff2"],
  Pasta: ["#ffe1c7", "#a64a22", "#fff7f0"],
  Noodles: ["#ffe8ad", "#8a6414", "#fff9e5"],
  Mughlai: ["#f8dec2", "#8a3c22", "#fff7ec"],
  Thali: ["#e5f1c8", "#627723", "#fbfff0"],
  Pizzas: ["#ffe0b5", "#9f3d22", "#fff5e6"],
  Burgers: ["#ead7b2", "#69451f", "#fff7e8"],
  Momos: ["#f2e7ff", "#673f8f", "#fbf7ff"],
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const makeItemImage = (name, category, index) => {
  const [accent, dark, light] = imageThemes[category] || imageThemes.Salad;
  const secondary = index % 2 === 0 ? "#ff4fa3" : "#f5a623";
  const initials = getInitials(name);
  const words = name.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${light}"/>
          <stop offset="1" stop-color="${accent}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4a2a2a" flood-opacity=".18"/>
        </filter>
      </defs>
      <rect width="640" height="420" fill="url(#bg)"/>
      <circle cx="546" cy="74" r="88" fill="#ffffff" opacity=".45"/>
      <circle cx="86" cy="346" r="120" fill="#ffffff" opacity=".38"/>
      <g filter="url(#shadow)">
        <circle cx="320" cy="176" r="112" fill="#fffaf5"/>
        <circle cx="320" cy="176" r="92" fill="${accent}"/>
        <circle cx="320" cy="176" r="64" fill="#fffaf5"/>
        <text x="320" y="195" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="46" font-weight="800" fill="${dark}">${initials}</text>
      </g>
      <g fill="${secondary}" opacity=".85">
        <circle cx="218" cy="116" r="13"/>
        <circle cx="424" cy="130" r="10"/>
        <circle cx="243" cy="264" r="9"/>
        <circle cx="444" cy="242" r="14"/>
      </g>
      <path d="M190 315 C240 292 292 292 348 315 S458 337 502 315" fill="none" stroke="${dark}" stroke-width="8" stroke-linecap="round" opacity=".16"/>
      <text x="320" y="335" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="34" font-weight="800" fill="${dark}">${firstLine}</text>
      <text x="320" y="374" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="27" font-weight="700" fill="${dark}" opacity=".86">${secondLine || category}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const generatedImagesByCategory = Object.entries(namesByCategory).reduce(
  (result, [category, names]) => ({
    ...result,
    [normalizeCategory(category)]: names.map((name, index) =>
      makeItemImage(name, category, index)
    ),
  }),
  {}
);

const categorySlug = (category) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const getImageForItem = (categoryKey, imagePool, menuFallback, index) => {
  const generatedPool = generatedImagesByCategory[categoryKey] || [];
  return generatedPool[index] || imagePool[index % imagePool.length] || menuFallback;
};

export const foodData = categories.reduce((result, category, categoryIndex) => {
  const categoryKey = normalizeCategory(category);
  const imagePool = localImagesByCategory[categoryKey] || [];
  const menuFallback = menuImageByCategory[categoryKey] || "";

  const categoryItems = namesByCategory[category].map((name, index) => ({
    id: `${categorySlug(category)}-${index + 1}`,
    name,
    price: 129 + categoryIndex * 22 + index * 7,
    description: descriptions[category],
    image: getImageForItem(categoryKey, imagePool, menuFallback, index),
    category,
  }));

  return { ...result, [category]: categoryItems };
}, {});

export const seedFoodList = categories.flatMap((category) =>
  foodData[category].map((item) => ({
    _id: item.id,
    name: item.name,
    price: item.price,
    description: item.description,
    image: item.image,
    category,
  }))
);
