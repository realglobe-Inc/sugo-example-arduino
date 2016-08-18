/**
 * Default script for playground
 */
'use strict'

import React, {PropTypes as types} from 'react'
import {mount} from 'sg-react'
import {
  ApContainer,
  ApBigButton,
  ApSelectableArticle,
  ApSlider
} from 'apeman-react-basic'
import co from 'co'
import sugoCaller from 'sugo-caller'
import asleep from 'asleep'

/**
 * Dynamic component create from the online-editor
 * @class Playground
 */
const Playground = React.createClass({
  // --------------------
  // Specs
  // --------------------

  getInitialState () {
    const s = this
    let { actors } = s.props
    return {
      /** Key of actor to connect */
      actorKey: actors.length > 0 ? actors[ 0 ].key : null,
      /** Arduino servo */
      servos: [],
      /** Current actor */
      actor: null
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { actors } = props
    let { actorKey, servos } = state
    return (
      <div className='dynamic-component'>
        <ApSelectableArticle
          options={ (actors || []).reduce((options, actor) => Object.assign(options, { [actor.key]: actor.key }), {}) }
          name='actorKey'
          label='Actor: '
          alt='No actor found! You need to connect one before playing'
          value={ actorKey }
          onChange={ (e) => s.setState({ actorKey: e.target.value }) }
        >
          <ApSelectableArticle.Content contentFor={ String(actorKey) }>
            {
              [0, 1, 2, 3].map((id) =>
                <div className='playground-row' key={ id }>
                  <ApContainer>
                    <div className='playground-item'>
                      <p>Operate servo {id}.</p>
                    </div>
                    <div className='playground-item' style={{width: '300px'}}>
                      <ApSlider
                        initial={ 40 }
                        min={ 0 }
                        max={ 180 }
                        onChange={(value) => {
                          servos.to(id, Number(value))
                        }}
                      />
                    </div>
                  </ApContainer>
                </div>
              )
            }
          </ApSelectableArticle.Content>
        </ApSelectableArticle>
      </div>
    )
  },

  // --------------------
  // LifeCycle
  // --------------------

  componentDidMount () {
    const s = this
    let { protocol, host } = window.location
    s.caller = sugoCaller(`${protocol}//${host}/callers`)
    s.connectServo()
  },

  componentDidUpdate (prevProp, prevState) {
    const s = this
    if (prevState.actorKey !== this.state.actorKey) {
      return co(function * () {
        yield s.disconnectServo()
        yield s.connectServo()
      }).catch((err) => console.error(err))
    }
  },

  componentWillUnmount () {
    const s = this
    s.disconnectServo()
  },

  // --------------------
  // custom
  // --------------------

  connectServo () {
    const s = this
    return co(function * () {
      let { actorKey } = s.state
      let actor = yield s.caller.connect(actorKey)
      console.log('actor connected')
      let servos = actor.get('servos')
      s.setState({ actor, servos })
    }).catch(err => console.error(err))
  },

  disconnectServo () {
    const s = this
    return co(function * () {
      let { actor } = s.state
      if (!actor) {
        return
      }
      yield actor.disconnect()
      s.setState({
        actor: null,
        servos: null
      })
    }).catch(err => console.error(err))
  }
})

// Mount react component
let timer = setInterval(() => {
  let container = document.getElementById('playground-root')
  if (!container) {
    return
  }
  mount(container, Playground, Object.assign({}, {
    actors: [].concat(window.actors || [])
  })).catch((err) => console.error(err))
  clearTimeout(timer)
}, 100)
