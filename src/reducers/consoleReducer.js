export const setDisplay = (x) => {
  if (x.display === 'inline') {
    return {
      type: 'HIDE_CONSOLE'
    }
  }
  return {
    type: 'SHOW_CONSOLE'
  }
}

const show = {
  display: 'inline',
  width: '549px'
}

const hidden = {
  display: 'none',
  width: '0px'
}

const consoleReducer = (state = hidden, action) => {
  switch (action.type) {
    case 'SHOW_CONSOLE':
      return show
    case 'HIDE_CONSOLE':
      return hidden
    default:
      return hidden
  }
}

export default consoleReducer