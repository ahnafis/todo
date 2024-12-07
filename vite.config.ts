import * as vite from "vite";
import * as vitest from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

const vite_config = vite.defineConfig({
  server: { port: 1111 },
  plugins: [tsconfigPaths(), react()],
});

const vitest_config = vitest.defineConfig({
  test: {
    environment: "jsdom",
  },
});

export default vite.mergeConfig(vite_config, vitest_config);
