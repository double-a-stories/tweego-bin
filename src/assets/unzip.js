const unzipper = require('unzipper');

/**
 * Unzip strategy for resources using `.zip`.
 *
 * Once unzip is completed, binary is downloaded into `binPath`.
 * Verify the binary and call it good.
 */
function unzip({ opts, res, onSuccess, onError }) {

  const unzip = unzipper.Extract({ path: opts.binPath });

  unzip.on('error', onError);
  unzip.on('close', onSuccess);
  res.pipe(unzip);
}

module.exports = unzip;
