import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    react(),
    federation({
      name: "app",
      exposes: {
        "./Layout": "./src/providers/routes/ui/index.tsx",
        "./Notification": "./src/providers/hooks/useNotification",
      },
      remotes: {
        sobesedovanie: "http://localhost:3002/assets/remoteEntry.js",
        // auth: "http://localhost:3003/assets/remoteEntry.js",
        // rezume: "http://localhost:3004/assets/remoteEntry.js",
        // settings: "http://localhost:3005/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],
  resolve: {
    alias: {
      providers: path.resolve(__dirname, "./src/providers"),
      shared: path.resolve(__dirname, "./src/shared"),
      app: path.resolve(__dirname, "./src/app"),
      widgets: path.resolve(__dirname, "./src/widgets"),
      feature: path.resolve(__dirname, "./src/feature"),
      entities: path.resolve(__dirname, "./src/entities"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
