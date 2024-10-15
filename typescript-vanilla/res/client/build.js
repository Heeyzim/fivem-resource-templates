import { exec } from "child_process";
import esbuild from "esbuild";
import pkg from "esbuild-plugin-fileloc";
const { filelocPlugin } = pkg;

const isWatchMode = process.argv.includes("--watch");

const buildOptions = (isWatch, platform, entry, outFile) => ({
  bundle: true,
  sourcemap: "inline",
  minify: platform === "browser" && !isWatch,
  watch: isWatch
    ? {
        onRebuild(error) {
          if (error) console.error("Rebuild failed:", error);
          else {
            console.log("Rebuilt successfully");
            generateTypes();
          }
        },
      }
    : false,
  entryPoints: [entry],
  outfile: outFile,
  platform,
  target: platform === "node" ? "node16" : undefined,
  plugins: platform === "node" ? [filelocPlugin()] : [],
});

const generateTypes = () => {
  exec("tsc --emitDeclarationOnly", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generating types: ${stderr}`);
    } else {
      console.log("Types generated successfully");
    }
  });
};

esbuild
  .build(
    buildOptions(isWatchMode, "browser", "./src/index.ts", "./dist/index.js"),
  )
  .then(
    () =>
      console.log(
        `Built client files${isWatchMode ? " (watching for changes)" : ""}`,
      ),
    generateTypes(),
  )
  .catch(() => process.exit(1));
