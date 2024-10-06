/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require("esbuild");
const { filelocPlugin } = require("esbuild-plugin-fileloc");

const isWatchMode = process.argv.includes("--watch");

const buildOptions = (isWatch, platform, entry, outFile) => ({
  bundle: true,
  sourcemap: "inline",
  minify: platform === "browser" && !isWatch,
  watch: isWatch
    ? {
        onRebuild(error) {
          if (error) console.error("Rebuild failed:", error);
          else console.log("Rebuilt successfully");
        },
      }
    : false,
  entryPoints: [entry],
  outfile: outFile,
  platform,
  target: platform === "node" ? "node16" : undefined,
  plugins: platform === "node" ? [filelocPlugin()] : [],
});

build(
  buildOptions(
    isWatchMode,
    "browser",
    "./src/index.ts",
    "./dist/client/index.js",
  ),
)
  .then(() =>
    console.log(
      `Built client files${isWatchMode ? " (watching for changes)" : ""}`,
    ),
  )
  .catch(() => process.exit(1));
