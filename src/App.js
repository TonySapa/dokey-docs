import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Transition } from 'react-transition-group';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  hamb: {
    display: 'block'
  },
  widthSidebar: {
    display: 'none'
  },
  '@media screen and (min-width: 600px)': {
    hamb: {
      display: 'none'
    },
    widthSidebar: {
      display: 'inline'
    }
  },
})

// Animations
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, right ${duration}ms ease-in-out`,
  opacity: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
  height: '100%'
}

const transitionStyles = {
  entering: { opacity: 1, right: '0px' },
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

const Hamburguer = (props) => {
  const classes = useStyles()

  // Hamburguer styles
  const position = {
    position: 'fixed',
    top: '30px',
    right: '30px',
  }

  const style = {
    ...position,
    zIndex: 2,
    width: '40px',
    height: '40px'
    //filter: 'blur(8px)'
  }

  const blurItem = {
    ...position,
    width: '50px',
    height: '50px',
    background: 'white',
    filter: 'blur(8px)',
    zIndex: -1
  }

  return (
    <div style={style} className={classes.hamb} onClick={props.trigger} >

      {/* blur background under hamburguer icon */}
      <div style={blurItem} />

      <svg width="35" height="35" viewBox="0 0 448 392" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 72H432C440.837 72 448 64.837 448 56V16C448 7.163 440.837 0 432 0H16C7.163 0 0 7.163 0 16V56C0 64.837 7.163 72 16 72ZM16 232H432C440.837 232 448 224.837 448 216V176C448 167.163 440.837 160 432 160H16C7.163 160 0 167.163 0 176V216C0 224.837 7.163 232 16 232ZM16 392H432C440.837 392 448 384.837 448 376V336C448 327.163 440.837 320 432 320H16C7.163 320 0 327.163 0 336V376C0 384.837 7.163 392 16 392Z" fill="#7D8694"/>
      </svg>
    </div>
  )
}

const App = () => {

  const [ inProp, setInProp ] = useState(false); // Boolean show sidebar
  const classes = useStyles()

  const backStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }

  const handleHamburguer = () => {
    console.log(`clicked`)
    setInProp(!inProp)
  }

  return (
    <div style={backStyle}>
      <Hamburguer trigger={handleHamburguer} />
      <Fade in={inProp}>
        <Sidebar />
      </Fade>
      <div className={classes.widthSidebar}>
        <Sidebar />
      </div>
      <Main />
    </div>
  )

}

export default App;
