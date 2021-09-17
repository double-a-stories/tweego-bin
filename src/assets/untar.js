const tar = require('tar');
const zlib = require('zlib');

/**
 * Unzip strategy for resources using `.tar.gz`.
 *
 * First we will Un-GZip, then we will untar. So once untar is completed,
 * binary is downloaded into `binPath`. Verify the binary and call it good.
 */
function untar({ opts, res, onSuccess, onError }) {

  const ungz = zlib.createGunzip();
  const untar = tar.Extract({ path: opts.binPath });

  ungz.on('error', onError);
  untar.on('error', onError);
  untar.on('end', onSuccess);

  res.pipe(ungz).pipe(untar);
}

module.exports = untar;
