import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Talha-portfolio/",
  optimizeDeps: {
    include: [
      "three",
      "three-stdlib",
      "gsap",
      "@gsap/react",
      "@react-three/fiber",
      "@react-three/drei",
      "@react-three/rapier",
      "@react-three/postprocessing",
      "react-fast-marquee",
      "react-icons/fa",
      "react-icons/md",
    ],
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("three-stdlib")) return "three-stdlib";
          if (id.includes("/three/")) return "three";
          if (id.includes("@react-three/rapier")) return "rapier";
          if (id.includes("@react-three/postprocessing") || id.includes("postprocessing")) return "postprocessing";
          if (id.includes("@react-three")) return "r3f";
          if (id.includes("gsap")) return "gsap";
          if (id.includes("react-icons")) return "icons";
          if (id.includes("react-fast-marquee")) return "marquee";
        },
      },
    },
  },
});
