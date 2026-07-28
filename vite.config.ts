import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const base = process.env.BASE || "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    tanstackStart({
      router: {
        basepath: base,
      },
      prerender: {
        enabled: true,
      },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
