import fs from "fs";
import unzipStream from "./utils/unzipStreamAsync.mjs";
import downloadStreamAsync from "./utils/downloadStreamAsync.mjs";
import getTweegoDownloadURL from "./utils/getTweegoDownloadURL.mjs";

export default async function installTweego() {
  const destinationDir = "bin";
  const url = getTweegoDownloadURL();
  const filename = url.substring(url.lastIndexOf('/') + 1); 
  console.info(`Downloading ${filename} from ${new URL(url).hostname} ...`);
  const stream = await downloadStreamAsync(url);
  console.info(`Unzipping ${filename} into ${destinationDir}`);
  await unzipStream(stream, destinationDir);
  // On Windows: move Tweego.exe to Tweego
  if (fs.existsSync("bin/tweego.exe")) {
    fs.renameSync("bin/tweego.exe", "bin/tweego");
  }
  // On macOS, the binary doesn't always have the executable flag set.
  fs.chmodSync("./bin/tweego", 0o755);
};