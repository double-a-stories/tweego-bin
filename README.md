## tweego-bin

[![NPM badge](https://shields.io/npm/v/tweego-bin?style=for-the-badge)](https://www.npmjs.com/package/tweego-bin)
[![License MIT-0](https://img.shields.io/badge/license-MIT--0-red?style=for-the-badge)](LICENSE)


An unofficial NPM wrapper for the [Tweego](https://www.motoslave.net/tweego/) compiler by [@tmedwards](https://github.com/tmedwards/tweego).

Similar to [mattrossman/tweego-node](https://github.com/mattrossman/tweego-node), but has no runtime dependencies.

On installation, downloads [the release ZIP](https://github.com/tmedwards/tweego/releases/tag/v2.1.1) for your system, and extracts it to `bin/`. NPM will create a symlink to `tweego` and `storyformats` inside the folder located at `$(npm bin)` or `$(npm bin -g)`.

### How to use

Global installation: This will allow you to use `tweego` as a shell command.

```sh
# Install
npm install --global tweego-bin
# Check that it worked.
tweego --list-formats
```

Project-level installation: allows using Tweego inside scripts in package.json.
```sh
# Install
npm install --save-dev tweego-bin
# Check that it worked.
npm exec -c 'tweego --list-formats'
```

See the [official Tweego docs](https://www.motoslave.net/tweego/docs/) for using Tweego.

### Known issues

* On Win32, npm will create a broken PowerShell shim called `tweego.ps1`.
    * To remove the broken shim, invoke `Remove-Item (Join-Path (npm bin -g) "\tweego.ps1")`.
* Builds are only available for x64 and x84 Windows, macOS, and Linux.
    * On an ARM64 Mac, the script will download the x64 version (requires Rosetta 2).
* Stream-based unzipping may behave unexpectedly slowly on some platforms.

### License

Copyright (c) 2021, 2022 Double-A

Licensed under the [MIT No Attribution (MIT-0) license](https://github.com/aws/mit-0).
