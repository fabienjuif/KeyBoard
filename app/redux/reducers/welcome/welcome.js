export const initState = { opacity: 100 }
export const initAction = { type: 'UNKNOWN_ACTION' }

import { WELCOME_FADE_AWAY } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case WELCOME_FADE_AWAY: {
      let opacity = state.opacity - 5

      if (opacity < 0) {
        opacity = 0
      }

      return {
        ...state,
        opacity,
      }
    }
    default: return state
  }
}
