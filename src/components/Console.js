import React from 'react'
import { createUseStyles } from 'react-jss'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import Title from './partials/Title'
import RequestTag from './partials/RequestTag'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015/*, a11yLight*/ } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const icons = {
  close: <FontAwesomeIcon icon={faTimes} style={{ color: '#F3F3F3', width: '20px', height: '20px' }} />
}


// Static CSS with classes
const useStyles = createUseStyles({
  component: {
    background: '#2E343B',
    color: '#F5F6F7', // Main white color for text over dark background
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100%',
    width: '549px',
    maxWidth: '100%',
    overflow: 'auto',
    zIndex: 3
  },
  componentText: {
    padding: '62px 30px',
    display: 'block',
    overflow: 'auto'
  },
  // Console
  closeButton: {
    position: 'fixed', //'absolute', console is now scrollable to make it mobile friendly
    right: '35px',
    top: '62px',
    background: '#2E343B', //'transparent', this way close button has more visibility when scrolling since it stays fix
    border: 'none'
  },
  link: {
    marginLeft: '11px',
    fontSize: '14px',
    wordWrap: 'break-word'
  },
  // Console: Request attributes table
  attributesList: {
    marginTop: '53px',
    marginBottom: '78px'
  },
  tableCell: {
    borderTop: '1px solid #434c55',
    borderBottom: '1px solid #434c55',
    paddingTop: '11px',
    paddingBottom: '11px'
  }
})


const Link = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const classes = useStyles()

  return (
    <div>
      <RequestTag req={props.req} theme={'dark'} />
      <span className={classes.link} style={mainStyles.consoleLink}>{props.link}</span>
    </div>
  )
}

const AttributeList = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const classes = useStyles()

  // Styles
  const leftHead = { width: '33%', padding: '0 16px 13px' }
  const rightHead = { float: 'left', padding: '0 0 13px 16px' }

  const leftCell = { float: 'right', paddingRight: '16px' }
  const name = { ...leftCell, ...mainStyles.consoleGrey }
  const type = { ...leftCell, ...mainStyles.consoleGrey10 }
  const right = {
    verticalAlign: 'top',
    paddingLeft: '16px',
    ...mainStyles.consoleDescription
  }

  return (
    <div className={classes.attributesList}>
      <h2 style={mainStyles.attributesTitle}>Request</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
        <tr>
          <th style={leftHead}>
            <span style={{ float: 'right', ...mainStyles.attributesHead }}>Attribute</span>
          </th>
          <th style={rightHead}>
            <span style={{ float: 'left', ...mainStyles.attributesHead }}>Description</span>
          </th>
        </tr>

        </thead>

        {props.attributes.map(a => (
          <tr className={classes.tableRow}>

            <td className={classes.tableCell}>
              <span style={name}>{a.name}</span><br />
              <span style={type}>{a.type}</span>
            </td>

            <td className={classes.tableCell} style={right}>
              {a.description}
            </td>
            
          </tr>        
        ))}
        
      </table>
    </div>
  )
}
  

const Console = (props) => {

  const console = useSelector(state => state.console)
  const mainStyles = useSelector(state => state.mainStyles)
  const classes = useStyles()

  return (
    <div className={classes.component} style={console}>
      <div className={classes.componentText}>
        <button onClick={props.onClose} className={classes.closeButton}>{icons.close}</button>
        <Title title={props.title} />
        <Link link={props.link} req={props.req}/>
        <AttributeList attributes={props.attributes}/>

        <h3 style={mainStyles.consoleSubtitles}>Demo</h3>
        <SyntaxHighlighter language="javascript" style={vs2015} customStyle={mainStyles.syntaxHighlight}>
          {props.headersDemo}
        </SyntaxHighlighter>

      </div>
    </div>
  )
  
}

export default Console