import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/my_shop_front/",
  plugins: [
    react(),
    visualizer({
      open: true, // Opcjonalnie, aby automatycznie otworzyć wykres w przeglądarce
      gzipSize: true, // Opcjonalnie, aby zobaczyć rozmiar po skompresowaniu
    }),
    tailwindcss(),
  ],
});
