import firebase from 'firebase'

export const FAIL_LOGIN = 'FAIL_LOGIN'
export const failLogin = (error) => {
  return {
    type: FAIL_LOGIN,
    error,
  }
}

export const LOGIN = 'LOGIN'
export const login = () => {
  return (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().getRedirectResult()
      .then((result) => {
        const user = result.user

        if (!user) {
          firebase.auth().signInWithRedirect(provider)
        } else {
          dispatch({
            type: LOGIN,
            user,
          })
          firebase.database().ref('users').set({
            ...user.providerData[0],
            timestamp: new Date().getTime(),
          })
        }
      })
      .catch((error) => {
        dispatch(failLogin(error))
      })
  }
}

export const LOGOUT = 'LOGOUT'
export const logout = () => {
  return {
    type: LOGOUT,
  }
}
