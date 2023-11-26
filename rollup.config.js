import federation from "@originjs/vite-plugin-federation";
export default {
  input: "src/index.js",
  plugins: [
    federation({
      name: "app",
      exposes: {
        "./Layout": "./src/providers/routes/ui/layout/ui/index.tsx",
        "./Notification": "./src/providers/hooks/useNotification",
      },
      remotes: {
        sobesedovanie: "http://localhost:3002/assets/remoteEntry.js",
        // auth: "http://localhost:3003/assets/remoteEntry.js",
        // rezume: "http://localhost:3004/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
