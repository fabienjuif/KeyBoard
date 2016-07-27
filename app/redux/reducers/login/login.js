export const initState = {}
export const initAction = { type: 'UNKNOWN_ACTION' }

import { LOGIN, LOGOUT, FAIL_LOGIN } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case LOGIN: return {
      ...state,
      logged: true,
      status: action.type.toLowerCase(),
      user: action.user,
    }
    case FAIL_LOGIN:
    case LOGOUT: return {
      ...state,
      logged: false,
      status: action.type.toLowerCase(),
      user: undefined,
    }
    default: return state
  }
}
