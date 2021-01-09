import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { setDisplay } from './../reducers/consoleReducer'
import RequestLink from './partials/RequestLink'
import { Transition } from 'react-transition-group';
import Console from './Console'
import Title from './partials/Title'

// Static CSS with classes
const useStyles = createUseStyles({
  component: {
    background: 'white',
    color: '#33373E', // Main black color for text
    position: 'absolute',
    left: 242,
    top: 0,
    height: '100%',
    //width: '574px'
    //width: '100%',
    maxWidth: '574px',
    padding: '50.8px 30px 62px'
  },
  '@media screen and (max-width: 600px)': {
    component: {
      left: '0',
      maxWidth: '100%'
    },
  },
  '@media screen and (min-width: 1600px)': {
    component: {
      paddingLeft: '6%' //padding: '50.8px 30px 62px' avoiding huge whitespace on right side on wide screens
    }
  },
  '@media screen and (min-width: 1700px)': {
    component: {
      paddingLeft: '8%' //padding: '50.8px 30px 62px' avoiding huge whitespace on right side on wide screens
    }
  },
  section: {
    marginBottom: '75px'
  }
})


// Animations
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, right ${duration}ms ease-in-out`,
  opacity: 0,
  position: 'relative',
  right: '-20px'
}

const transitionStyles = {
  entering: { opacity: 0, right: '0px' },
  entered: { opacity: 1, right: '0px' },
  exiting: { opacity: 0 },
  exited: { opacity: 0, display: 'none' },
};

// Transition Component
const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);


const Main = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const content = useSelector(state => state.content)
  const console = useSelector(state => state.console)
  const dispatch = useDispatch()

  const [ inProp, setInProp ] = useState(false);
  const [ consoleContent, setConsoleContent ] = useState({
    title: '',
    link: '',
    req: '',
    attributes: [],
    headersDemo: ''
  })


  const classes = useStyles()

  const handleShow = (x) => {
    
    // It forces to use the close button to avoid destroying the fading effect
    if (inProp) {
      return null
    }

    setInProp(true);
    dispatch(setDisplay(console))
    setConsoleContent(x)
  }

  const handleClose = () => {
    setInProp(false);
    dispatch(setDisplay(console))
  }


  return (
    <>
      <div className={classes.component}>

        {content.sections.map(section => 
          section.subSections.map(subSection => 
            <section className={classes.section}>
              <Title section={section.name} title={subSection.name} id={subSection.id} />
              {/* Rendering optional paragraphs of subSection */}
              {subSection.paragraphs
                ? subSection.paragraphs.map(paragraph => <p style={mainStyles.typoBody}>{paragraph}</p>)
                : null}
              {/* Mapping parts of the subSection: literal uses like "Managing Users" */}
              {subSection.parts
                ? subSection.parts.map(part => 
                  <>
                    <h3 style={mainStyles.typoPartTitle} id={part.id}>{part.name}</h3>
                    {/* Rendering optional paragraphs of subsection.part */}
                    {part.paragraphs 
                      ? part.paragraphs.map(paragraph => <p style={mainStyles.typoBody}>paragraph</p>)
                      : null}
                    {/* Rendering requests of each subsection.part on cozy link that toggles console window*/}
                    {part.requests
                      ? part.requests.map(request =>
                        <>
                          <RequestLink onClick={() => handleShow(request)} case={request.title} req={request.req} />
                          {/* Optional endpoint explanation as paragraph under link */}
                          {request.description ? <p style={mainStyles.typoBody}>{request.description}</p> : null}
                        </>)
                      : null}
                  </>)
                : null}
            </section>
          )
        )}

      </div>

      <Fade in={inProp}>
        <Console 
          onClose={() => handleClose()}
          title={consoleContent.title}
          link={consoleContent.link}
          req={consoleContent.req}
          attributes={consoleContent.attributes}
          headersDemo={consoleContent.headersDemo}
        />
      </Fade>

    </>
  )
}

export default Main