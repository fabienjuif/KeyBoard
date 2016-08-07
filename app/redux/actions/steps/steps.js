export const NEXT_STEP = 'NEXT_STEP'
export const nextStep = () => ({ type: NEXT_STEP })

export const GO_TO_STEP = 'GO_TO_STEP'
export const goToStep = (step) => ({ type: GO_TO_STEP, step })
