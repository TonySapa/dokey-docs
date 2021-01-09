import content from '../content/content'

export const setDisplay = (property) => {
  return {
    type: 'SET_CONTENT',
    properties: property // Example: { color: red }
  }
}

const contentReducer = (state = content, action) => {
  switch (action.type) {
    case 'SET_CONTENT':
      const newProperties = action.properties
      return {...state, newProperties}
    case 'RESET_CONTENT':
      return content
    default:
      return state
  }
}

export default contentReducer