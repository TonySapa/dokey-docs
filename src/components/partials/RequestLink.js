import React from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import RequestTag from './RequestTag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const icons = {
  angleRight: <FontAwesomeIcon icon={faAngleRight} style={{ color: '#272C33', width: '20px', height: '20px' }} />
}


// Static CSS with classes
const staticCss = {
  component: {
    background: '#F5F6F7',
    margin: '36px 0px 18px',
    //width: '100%',
    height: '49px',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderLeft: '2.5px solid #000000',
    color: '#000000',
    display: 'flex',
    alignItems: 'center'
  },
  arrowSpan: {
    marginLeft: 'auto',
    marginRight: '0',
    paddingLeft: '15px'
  }
}


// Main Component
const RequestLink = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const useStyles = createUseStyles({ ...staticCss, mainStyles })

  const classes = useStyles()

  return (
    <div>
      <div onClick={props.onClick} className={classes.component}>
        <h1 style={mainStyles.typoBodyAttention}>{props.case}</h1>
        <RequestTag req={props.req} /* theme={'dark'} */ />
        {/* There's a dark option passed as props: theme={'dark'}. Theme is light by default  */}
        <span className={classes.arrowSpan}>{icons.angleRight}</span>
      </div>
    </div>
  )
}

export default RequestLink