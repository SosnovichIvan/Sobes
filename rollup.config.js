import federation from "@originjs/vite-plugin-federation";
export default {
  input: "src/index.js",
  plugins: [
    federation({
      name: "app",
      exposes: {
        "./AppLayout": "./src/app/ui/layout/ui/index",
      },
      remotes: {
        sobesedovanie: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
