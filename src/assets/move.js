const { join } = require('path');
const { createWriteStream } = require('fs');

/**
 * Move strategy for binary resources without compression.
 */
function move({ opts, res, onSuccess, onError }) {

  const stream = createWriteStream(join(opts.binPath, opts.binName));

  stream.on('error', onError);
  stream.on('close', onSuccess);

  res.pipe(stream);
}

module.exports = move;
