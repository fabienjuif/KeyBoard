import { NEXT_STEP, GO_TO_STEP } from '../../actions'

export const initState = {
  order: ['what', 'when', 'where', 'who', 'done'],
  current: 'what',
}

export const initAction = { type: 'UNKNOWN_ACTION' }

const getCurrentIndex = (state) => state.order.indexOf(state.current)
const getIndex = (state, step) => state.order.indexOf(step)

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case GO_TO_STEP: {
      if (getCurrentIndex(state) <= getIndex(state, action.step)) return state

      return {
        ...state,
        current: action.step,
      }
    }
    case NEXT_STEP: {
      const indexOfCurrent = getCurrentIndex(state)
      let nextIndex = indexOfCurrent + 1
      if (nextIndex === state.order.length) nextIndex = indexOfCurrent

      return {
        ...state,
        current: state.order[nextIndex],
      }
    }
    default: return state
  }
}
