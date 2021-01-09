import jssStyles from './../styles/jss-styles'

export const setDisplay = (property) => {
  return {
    type: 'SET_STYLES',
    properties: property // Example: { color: red }
  }
}

const stylesReducer = (state = jssStyles, action) => {
  switch (action.type) {
    case 'SET_STYLES':
      const newProperties = action.properties
      return {...state, newProperties}
    case 'RESET_STYLES':
      return jssStyles
    default:
      return state
  }
}

export default stylesReducer