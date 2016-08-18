/**
 * Run actor
 * @function actor
 * @returns {Promise}
 */
'use strict'

const pkg = require('../package.json')
const sugoActor = require('sugo-actor')
const co = require('co')
const debug = require('debug')('sugo:example:arduino:actor')
const colorprint = require('colorprint')
const pudding = require('pudding')({ lang: 'en' })
const five = require('johnny-five')
const { Module } = require('sugo-module-base')

let configs = require('./configs')

/** @lends actor */
function actor () {
  debug('Example actor invoked')
  let { port, hostname } = configs()
  let url = `http://${hostname}:${port}/actors`

  let { ACTOR_KEY } = process.env

  let context = actor.newContext()
  let key = ACTOR_KEY || context.key

  colorprint.notice(`[${pkg.name}] Running actor script...`)
  colorprint.trace('Settings: %s', { port, hostname, key })

  return co(function * () {
    let board = yield new Promise((resolve) => {
      let board = new five.Board({
        repl: false
      })
      board.on('ready', () => { resolve(board) })
    })
    let servos = new five.Servos([
      {
        pin: 3,
        startAt: 90
      },
      {
        pin: 5,
        startAt: 40
      },
      {
        pin: 6,
        startAt: 60
      },
      {
        pin: 9,
        startAt: 90
      }
    ])
    let instance = sugoActor(url, {
      key,
      modules: {
        servos: new Module({
          to: (id, degree) => co(function * () {
            servos[id].to(degree)
          })
        })
      },
      force: true
    })
    yield instance.connect()
    return instance
  })
}

Object.assign(actor, {
  newContext () {
    return pudding.explode({
      key: '${spinalcase([this.color, this.fish].join("-")).trim()}'
    }, 1)[ 0 ]
  }
})

module.exports = actor
