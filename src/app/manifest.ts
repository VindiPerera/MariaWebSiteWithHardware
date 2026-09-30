import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MariaPoS — Point of Sale & Inventory Software",
    short_name: "MariaPoS",
    description: "Offline-first Windows POS system and inventory management software for retail counters.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c62828",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
