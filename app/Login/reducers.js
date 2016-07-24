export const initState = {}
export const initAction = { type: 'UNKNOWN_ACTION' }

import { LOGIN, LOGOUT, LOGIN_FAIL } from './actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case LOGIN: return {
      ...state,
      logged: true,
      status: action.type.toLowerCase(),
      user: action.user,
    }
    case LOGIN_FAIL:
    case LOGOUT: return {
      ...state,
      logged: false,
      status: action.type.toLowerCase(),
      user: undefined,
    }
    default: return state
  }
}
