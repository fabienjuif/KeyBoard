import reducer, { initState } from './reducers'

import { LOGIN, FAIL_LOGIN, LOGOUT } from './actions'

/* eslint-env mocha */

describe('Login reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${LOGIN} action`, () => {
    it('It should handle a classic login', () => {
      const user = { name: 'Toto' }
      const state = reducer(initState, { type: LOGIN, user })

      state.should.be.deep.equals({
        user,
        status: 'login',
        logged: true,
      })
    })

    it('It should not override others fields', () => {
      const user = { name: 'Toto' }
      const state = reducer({ other: 'field' }, { type: LOGIN, user })

      state.should.contains({
        other: 'field',
      })
    })
  })

  describe(`${FAIL_LOGIN} and ${LOGOUT} action`, () => {
    const logoutClassic = (type) => {
      const user = { name: 'Toto' }
      const state = reducer(initState, { type, user })

      state.should.be.deep.equals({
        user: undefined,
        status: type.toLowerCase(),
        logged: false,
      })
    }

    const loginFail = (type) => {
      const user = { name: 'Toto' }
      const state = reducer({ other: 'field' }, { type, user })

      state.should.contains({
        other: 'field',
      })
    }

    it('It should handle a classic logout and login failure', () => {
      logoutClassic(LOGOUT)
      logoutClassic(FAIL_LOGIN)
    })

    it('It should not override others fields', () => {
      loginFail(LOGOUT)
      loginFail(FAIL_LOGIN)
    })
  })
})
