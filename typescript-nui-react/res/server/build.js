import esbuild from "esbuild";
import pkg from "esbuild-plugin-fileloc";
const { filelocPlugin } = pkg;

const isWatchMode = process.argv.includes("--watch");

const buildOptions = (isWatch, platform, entry, outFile) => ({
  bundle: true,
  sourcemap: "inline",
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
  platform: "node",
  target: "node16",
  plugins: platform === "node" ? [filelocPlugin()] : [],
});

esbuild
  .build(
    buildOptions(
      isWatchMode,
      "node",
      "./src/index.ts",
      "./dist/server/index.js",
    ),
  )
  .then(() =>
    console.log(
      `Built server files${isWatchMode ? " (watching for changes)" : ""}`,
    ),
  )
  .catch(() => process.exit(1));
