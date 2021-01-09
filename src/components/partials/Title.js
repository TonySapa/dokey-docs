import React from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'


// Static CSS with classes (it gets overrided)
const useStyles = createUseStyles({
  component: {
    position: 'relative',
    display: 'block'
  },
  section: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '13.5px',
    lineHeight: '15.82px',
    margin: 'none',
    padding: 'none',
    color: '#7D8694'
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '24.2px',
    marginBottom: '20.73px'
  }
})


const Title = (props) => {

  // Static CSS
  const classes = useStyles()

  // Variable CSS on Redux state
  const mainStyles = useSelector(state => state.mainStyles)

  // 2 Title styles from redux state
  const lightSection = mainStyles.typoSectionTitle
  const lightTitle = mainStyles.typoMainTitle

  // Boolean to render with Dark theme or normal theme
  const dark = props.theme === 'dark'

  // To use with Dark theme
  const section = dark ? { ...lightSection, visibility: 'hidden'} : lightSection
  const title = dark ? { ...lightTitle, color: '#F3F3F3' } : lightTitle

  // Style of hr
  const line = { height: '1px', background: '#E8EAED', border: 'none', marginBottom: '20.73px' }

  return (
    <div className={classes.component}>

      {/* Section title is hidden on Dark mode. (In console there's no section title) */}
      <h2 className={classes.section} style={section}>{props.section}</h2>

      {/* Again, if is Dark mode the color of the title will be overrided whith a light one */}
      <h1 className={classes.title} style={title} id={props.id}>{props.title}</h1>
      <hr style={line}/>
      
    </div>
  )
}

export default Title