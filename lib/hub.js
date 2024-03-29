/**
 * Run hub
 * @function hub
 * @returns {Promise}
 */
'use strict'

const pkg = require('../package.json')
const sugoHub = require('sugo-hub')
const co = require('co')
const debug = require('debug')('sugo:example:arduino:hub')
const colorprint = require('colorprint')

const compile = require('sugo-endpoint-compile')
const file = require('sugo-endpoint-file')

let configs = require('./configs')

/** @lends hub */
function hub () {
  debug('Example hub invoked')
  let { port, storage, contents } = configs()

  colorprint.notice(`[${pkg.name}] Running hub script...`)
  colorprint.trace('Settings: %s', { port, storage })
  return co(function * () {
    let hub = yield sugoHub({
      port, storage,
      static: [ 'ui' ],
      middlewares: [],
      endpoints: {
        // Dynamic compiler for user defined script
        '/dynamic/compile': compile(),
        '/dynamic/contents/:filename': file(contents)
      }
    })
    return hub
  })
}

module.exports = hub
