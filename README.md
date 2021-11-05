## tweego-bin

An unofficial NPM wrapper for the [Tweego](https://www.motoslave.net/tweego/) compiler by [@tmedwards](https://github.com/tmedwards/tweego).

Similar to <https://github.com/mattrossman/tweego-node>, but requires no dependencies or NodeJS wrappers.

On installation, downloads the release ZIP for your system, and extracts it to `bin/`. NPM will create symlinks `bin/tweego` and `bin/storyformats` inside the folder located at `$(npm bin)` or `$(npm bin -g)`.

### How to use

Global installation: This will allow you to use `tweego` as a shell command.

```sh
# Install
npm install --global tweego-bin
# Check that it worked.
tweego -v
```

Project-level installation: allows using Tweego inside scripts in package.json.
```sh
# Install
npm install --save-dev tweego-bin
# Check that it worked.
npm exec -c 'tweego -v'
```

See the [official Tweego docs](https://www.motoslave.net/tweego/docs/) for using Tweego.

### Current limitations

* Builds are only available for x64 and x84 Windows, macOS, and Linux.
    * If you're on an ARM64 Mac, you'll either need to build Tweego from source, or try running this in `x86_64` mode.
* The executable on Windows will be named `tweego` instead of `tweego.exe`. Not sure if this actually works there yet.

### License

Copyright 2021 Double-A

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
