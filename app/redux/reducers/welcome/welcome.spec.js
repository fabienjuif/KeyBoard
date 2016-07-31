import reducer, { initState } from './welcome'

import { WELCOME_FADE_AWAY } from '../../actions'

/* eslint-env mocha */

describe('welcome reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${WELCOME_FADE_AWAY} action`, () => {
    it('should handle starting fade', () => {
      const state = reducer(undefined, { type: WELCOME_FADE_AWAY })
      state.should.be.deep.equals({ ...initState, opacity: 95 })
    })

    it('should handle a simple fade', () => {
      const state = reducer({ ...initState, opacity: 85 }, { type: WELCOME_FADE_AWAY })
      state.should.be.deep.equals({ ...initState, opacity: 80 })
    })

    it('should\'nt go negative', () => {
      const state = reducer({ ...initState, opacity: 2 }, { type: WELCOME_FADE_AWAY })
      state.should.be.deep.equals({ ...initState, opacity: 0 })
    })
  })
})
