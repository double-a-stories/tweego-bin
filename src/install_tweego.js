// install_tweego.js
// (c) 2021 double-a-stories
// A simple script to download Tweego and unzip it into ./bin
const axios = require('axios'); // needed for making HTTPS requests which follow GitHub's redirects
const unzipper = require('unzipper');

//////////////////////////////////////////////
// Determine download URL based on platform //
//////////////////////////////////////////////

const makeDownloadUrl = (version, os, arch) => `https://github.com/tmedwards/tweego/releases/download/v${version}/tweego-${version}-${os}-${arch}.zip`;

const getDownloadUrl = () => {
  const VERSION = "2.1.1"; // The current version of Tweego

  // Mapping from Node's `process.arch` to Golang's `$GOARCH`
  const ARCH_MAPPING = {
    ia32: 'x86',
    x64: 'x64',
  };
  // Mapping between Node's `process.platform` to Golang's
  const PLATFORM_MAPPING = {
    darwin: 'macos',
    linux: 'linux',
    win32: 'windows',
  };

  if (!(process.arch in ARCH_MAPPING)) {
    throw new Error(`Couldn't find binary for CPU architecture '${process.arch}'`);
  }
  if (!(process.platform in PLATFORM_MAPPING)) {
    throw new Error(`Couldn't find binary for platform '${process.platform}''`);
  }

  return makeDownloadUrl(VERSION, PLATFORM_MAPPING[process.platform], ARCH_MAPPING[process.arch]);
}

///////////////////////
// Download ZIP file //
///////////////////////

async function downloadTweego(destinationDir) {
  const downloadUrl = getDownloadUrl();
  // Make an HTTPS request
  console.info(`Attempting to download from ${downloadUrl} ...`);

  let res;
  try {
    res = await axios.get(downloadUrl, { responseType: 'stream', });
  } catch (err) {
    console.error(`Error downloading from ${new URL(err.config.url).hostname}: ${err.message}`);
    return;
  }
  console.info(`Got response - file is ${Math.floor(+res.headers['content-length'] / Math.pow(2, 10))} KiB`)
  if (res.status != 200) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }
  await unzipResponse(res, destinationDir);
}

///////////////////////////
// Unzip downloaded file //
///////////////////////////


async function unzipResponse(res, destinationDir) {
  // Unzip the result
  console.info(`Unzipping file into ${destinationDir} ...`);
  await new Promise((resolve, reject) => {
    const unzip = unzipper.Extract({ path: destinationDir })
      .on("error", reject)
      .on("close", resolve);
    res.data.pipe(unzip);
  });
  console.info("Success!");
}

downloadTweego("bin/"); // places tweego files into bin/