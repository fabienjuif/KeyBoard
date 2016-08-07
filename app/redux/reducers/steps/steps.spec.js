import reducer, { initState } from './steps'

import { GO_TO_STEP, NEXT_STEP } from '../../actions'

/* eslint-env mocha */

describe('steps reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${NEXT_STEP} action`, () => {
    it('should handle first next step', () => {
      const state = reducer(undefined, { type: NEXT_STEP })
      state.should.be.deep.equals({ ...initState, current: initState.order[1] })
    })

    it('should protect the last step (don\' go after the last)', () => {
      const length = initState.order.length
      let state = reducer(
        { ...initState, current: initState.order[length - 1] },
        { type: NEXT_STEP }
      )
      state.should.be.deep.equals({ ...initState, current: initState.order[length - 1] })
      state = reducer(state, { type: NEXT_STEP })
      state.should.be.deep.equals({ ...initState, current: initState.order[length - 1] })
    })
  })

  describe(`${GO_TO_STEP} action`, () => {
    it('should go to a previous step', () => {
      const length = initState.order.length
      const state = reducer(
        { ...initState, current: initState.order[length - 1] },
        { type: GO_TO_STEP, step: initState.order[1] }
      )
      state.should.be.deep.equals({ ...initState, current: initState.order[1] })
    })

    it('should avoid going after the current step', () => {
      const length = initState.order.length
      const state = reducer(
        { ...initState, current: initState.order[length - 2] },
        { type: GO_TO_STEP, step: initState.order[length - 1] }
      )
      state.should.be.deep.equals({ ...initState, current: initState.order[length - 2] })
    })
  })
})
