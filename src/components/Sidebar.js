import React from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  component: {
    background: '#F9F6F4', // Gets override by mainStyles
    color: '#33373E', // Main black color for text
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '242px',
    zIndex: 2,
  },
  nav: {
    padding: '30px'
  },
  sections: {
    marginBottom: '39px'
  },
  sectionTitle: {
    marginBottom: '21px'
  },
  subSectionTitle: {
    margin: '9px 0 14px',
    display: 'block',
    textDecoration: 'none'
  },
  typoSideBarLink: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '15.5px',
    fontWeight: 400,
    lineHeight: '18.16px',
    color: '#DC8E6E',
    textDecoration: 'none',
    padding: '10px 16px',
    display: 'block'
  },
  linkStack: {
    marginBottom: '16px'
  }
})

const Logo = () => {
  const mainStyles = useSelector(state => state.mainStyles)
  const content = useSelector(state => state.content)

  return (
    <div style={{ display: 'flex', top: '30', marginBottom: '37px' }}>
      <div style={{ marginTop: 'auto' }}>
        {content.logo}        
      </div>
      <h1 style={{ ...mainStyles.typoLogo, margin: 'auto 15px', color: '#DC8E6E'}}>{content.appName}</h1>
    </div>
  )
}

const Sidebar = (props) => {

  const mainStyles = useSelector(state => state.mainStyles)
  const content = useSelector(state => state.content)
  const background = mainStyles.sections.sidebar
  const classes = useStyles()

  return (
    <div className={classes.component} style={background}>
      
      <nav className={classes.nav}>
        <Logo />
        {content.sections.map(section => 
          <div className={classes.sections}>

            <h1 className={classes.sectionTitle} style={mainStyles.typoSectionTitle}>{section.name}</h1>
            {section.subSections.map(subSection =>
              <>
                <a className={classes.subSectionTitle} style={mainStyles.typoSideBarSubSection} href={`#${subSection.id}`}>{subSection.name}</a>
                <div className={classes.linkStack}>
                  {subSection.parts
                    ? subSection.parts.map(part =>
                        <a className={classes.typoSideBarLink} style={mainStyles.typoSideBarLink} href={`#${part.id}`}>{part.name}</a>
                      )
                    : null}
                  </div>
              </>
            )}
            
          </div>)}
      </nav>

    </div>
  )
}

export default Sidebar