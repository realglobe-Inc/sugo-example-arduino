/**
 * Open ui page
 * @function ui
 * @returns {Promise}
 */

'use strict'

const open = require('open')
const co = require('co')
const debug = require('debug')('sugo:example:arduino:ui')

let configs = require('./configs')

/** @lends ui */
function ui () {
  debug('Example ui invoked')

  let { port, hostname } = configs()
  let url = `http://${hostname}:${port}/index.html`

  return co(function * () {
    return yield new Promise((resolve, reject) =>
      open(url, (err) => err ? reject(err) : resolve())
    )
  })
}

module.exports = ui
