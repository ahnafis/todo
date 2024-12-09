import * as vite from "vite";
import * as vitest from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

const vite_config = vite.defineConfig({
  plugins: [tsconfigPaths()],
});

const vitest_config = vitest.defineConfig({
  test: { environment: "jsdom" },
});

export default vite.mergeConfig(vite_config, vitest_config);
