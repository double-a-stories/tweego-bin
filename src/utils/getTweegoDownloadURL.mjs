/**
 * @file Get Tweego.zip download URL from system process type
 */
import process from "process";

// The current version of Tweego
const VERSION = "2.1.1";
// Mapping between Node.js "arch" and Golang architecture
const ARCH_MAPPING = {
    ia32: 'x86',
    x64: 'x64',
};
// Mapping between Node.js "platform" and Golang architecture
const PLATFORM_MAPPING = {
    darwin: 'macos',
    linux: 'linux',
    win32: 'windows',
};

/**
 * @returns {string} The URL to download from 
 */
export default function getTweegoDownloadURL() {
    let { arch, platform } = process;
    if (platform == "darwin" && arch == "arm64") {
        console.info("This is an ARM64 macOS device. You will need Rosetta 2 for Tweego to work.")
        // This is an ARM64 Mac. Let's assume Rosetta 2 works
        arch = 'x64';
    } else if (!(arch in ARCH_MAPPING) || !(platform in PLATFORM_MAPPING)) {
        throw new Error(`No Tweego binary for platform ${platform} (${arch})`);
    }
    let os = PLATFORM_MAPPING[platform];
    let architecture = ARCH_MAPPING[arch];
    return `https://github.com/tmedwards/tweego/releases/download/v${VERSION}/tweego-${VERSION}-${os}-${architecture}.zip`;
}