import React from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'

// Static CSS with classes
const staticCss = {
  component: {
    background: '#DD5155', // It gets override with colors.danger
    //inWidth: '35px',
    height: '22px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '6px',
    paddingRight: '6px'
  }
}


const RequestTag = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const useStyles = createUseStyles({ ...staticCss, mainStyles })
  const classes = useStyles()

  // Type of request: GET, PUT, POST, DELETE...
  const req = props.req
  // Styles of this type of request
  const theme = props.theme === 'dark' ? 'dark' : 'light'
  const reqStyle = theme === 'dark' ? mainStyles.requestTag[theme] : mainStyles.requestTag[theme][req]
  const typography = theme === 'dark' ? mainStyles.typoRequestTag[theme][req] : mainStyles.typoRequestTag[theme]

  return (
    <div className={classes.component} style={reqStyle}>
      <span style={typography}>{req.toUpperCase()}</span>
    </div>
  )
}

export default RequestTag