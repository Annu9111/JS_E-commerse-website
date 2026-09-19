// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "src/about.html"), // Additional HTML pages
        contact: resolve(__dirname, "src/contact.html"),
        products: resolve(__dirname, "src/products.html"),
        addToCart: resolve(__dirname, "src/addToCart.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});