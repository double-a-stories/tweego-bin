## tweego-bin

[![NPM badge](https://shields.io/npm/v/tweego-bin?style=for-the-badge)](https://www.npmjs.com/package/tweego-bin)

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

Copyright 2021, 2022 Double-A

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
