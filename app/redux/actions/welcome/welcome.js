export const WELCOME_FADE_AWAY = 'WELCOME_FADE_AWAY'
export const welcomeFadeAway = () => {
  return {
    type: WELCOME_FADE_AWAY,
  }
}

export const WELCOME_START_FADE_AWAY = 'WELCOME_START_FADE_AWAY'
export const welcomeStartFadeAway = () => {
  return (dispatch, getState) => {
    // Debug purpose, alway start an action with a dispatch
    // It can be seen in devtools ;)
    dispatch({ type: WELCOME_START_FADE_AWAY })

    // Run an interval that auto cancel when there is nothing to fade
    // Start it a bit delayed after the screen shows up
    setTimeout(
      () => {
        const interval = setInterval(
          () => {
            dispatch(welcomeFadeAway())
            if (getState().welcome.opacity <= 0) clearInterval(interval)
          },
          50
        )
      },
      1000
    )
  }
}
