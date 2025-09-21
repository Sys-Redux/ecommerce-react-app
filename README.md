# E-commerce React App (Vite + Tailwind)

A small e-commerce catalog I built to practice React fundamentals and modern tooling. The goal was to keep the scope tiny but apply real-world patterns: component-driven UI, prop-driven styling, and a simple yet clean filtering experience.

## ✨ Features
- Product catalog with images, descriptions, and prices
- Category-based filtering via a friendly UI
- Category-aware styling: each product card theme changes based on its category
- Responsive layout with a grid that adapts from mobile to desktop
- Lightweight setup powered by Vite for instant dev server + fast builds

## 🧰 Tech Stack
- React 19 with functional components and hooks (useState, useMemo)
- Vite 7 for dev/build
- Tailwind CSS v4 (via `@tailwindcss/vite`) for utility-first styling
- ESLint (latest) with React hooks rules

## 📁 Project Structure
```
/ (repo root)
├── index.html                 # Vite entry
├── vite.config.js             # Vite + React + Tailwind plugins
├── package.json               # Scripts & dependencies
├── public/
│   └── e.svg                  # Favicon
└── src/
    ├── App.css                # Global styles (imports Tailwind)
    ├── main.jsx               # App bootstrap
    ├── App.jsx                # App shell + state + filtering
    ├── assets/                # Local images
    │   ├── gpu.jpg
    │   ├── chassis.jpg
    │   ├── mobo.png
    │   └── cpu.png
    └── components/
        ├── CategorySearch.jsx # Category filter controls
        ├── ProductList.jsx    # Responsive grid of products
        └── ProductItem.jsx    # Category-themed product card
```

## 🚀 Getting Started

1. Install dependencies
```bash
npm install
```

2. Start the dev server
```bash
npm run dev
```

3. Open the app
- Vite will print a local URL (usually http://localhost:5173)
- The homepage shows the catalog with category filters at the top

## 🧩 How it works
- `App.jsx` owns the `products` array and the `selectedCategory` state.
- `CategorySearch` renders a button per category (plus “All”). Clicking a button updates `selectedCategory` via a prop callback.
- `useMemo` derives:
  - `categories`: a unique list of categories from products
  - `filteredProducts`: a filtered array based on the selected category
- `ProductList` receives `filteredProducts` and renders `ProductItem` cards.
- `ProductItem` applies category-based themes (GPU = green, Chassis = gray, Motherboard = blue, Processor = zinc) and displays a product image using a responsive container to prevent distortion on small screens.

## 🧪 Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Production build
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint

## 📝 Decisions & Learnings
- Kept product data local in `App.jsx` to focus on UI behavior first. If this grew, I’d extract to a data file or API.
- Used `useMemo` for derived state (categories and filtered list) to avoid recomputing on every render.
- Leaned on Tailwind utilities for fast iteration and consistent spacing/typography.
- Built category-based styling as a small helper inside `ProductItem` so card themes stay cohesive and easy to tweak.
- Chose a simple `switch`/`case` in `ProductItem` to map categories to style tokens. It reads clearly at small scale and keeps styles colocated with the component. If categories grew or became dynamic, I’d migrate this to a config map (object) or even a theme file to avoid code changes for new categories.

## 🔭 Next Steps (if I keep going)
- Add a search box and combine with category filters
- Introduce sorting (price asc/desc)
- Persist selected category in the URL (query params)
- Add a simple cart with add/remove and totals
- Extract products into a JSON file or mock API and fetch on mount
- Write unit tests for the filter logic and component rendering

---
If you check this out and have feedback, I’d love to hear how you’d improve it—always learning and leveling up as a developer.