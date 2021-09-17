const { join, resolve } = require('path');
const { existsSync, renameSync, chmodSync } = require('fs');
const { getInstallationPath } = require('../common');

function verifyAndPlaceBinary(binName, binPath, callback) {
  if (!existsSync(join(binPath, binName))) {
    return callback(`Downloaded binary does not contain the binary specified in configuration - ${binName}`);
  }

  getInstallationPath((err, installationPath) => {
      if (err) {
        return callback(err);
      }

      // Move the binary file and make sure it is executable
      renameSync(join(binPath, binName), join(installationPath, binName));
      renameSync(join(binPath, "storyformats"), join(installationPath, "storyformats"));
      // Make sure it is executable
      chmodSync(join(installationPath, binName), '755');

      console.log('Placed tweego binary at', join(installationPath, binName));
      console.log('Placed storyformats dir at', join(installationPath, "storyformats"));
      callback(null);
  });
}

module.exports = verifyAndPlaceBinary;
