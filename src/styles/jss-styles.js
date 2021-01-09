const colors = {
  background: '#FFFFFF',
  sideBackground: '#F9F6F4',
  primary: '#DC8E6E',
  primaryDark: '#D3724B',
  black: '#000000',
  grey: '#A4AAB3',
  grey10: '#7D8694',
  success: '#52D232',
  danger: '#DD5155',
  blue: '#32A2D2',
  orange: '#D26232',
  consoleBackground: '#2E343B',
  consoleDark: '#272D33',
  consoleWhite: '#F3F3F3',
  consoleGrey: '#C4C4C4',
  consoleBody: '#626A76',
  requestTag: '#FFFBFB',
  sideBarSubSection: '#33373E',
  sideBarLink: '#A1A8B2'
}

const fonts = {
  primary: '"Roboto", sans-serif',
  secondary: '"Roboto Mono", monospace'
}

const jssStyles = {
  typoBody: {
    fontFamily: fonts.primary,
    fontSize: '15.5px',
    color: colors.grey,
    fontWeight: 'normal',
    lineHeight: '22px', //'18.16px',
    marginBottom: '20px',
    letterSpacing: '0.5px', // Added after Figma file. There's no letter-spacing on original figma file!
    width: '100%'
  },
  typoBodyAttention: {
    fontFamily: fonts.primary,
    fontSize: '15.5px',
    color: colors.black,
    fontWeight: 'normal',
    marginRight: '26px'
  },
  typoConsoleBody: {
    fontFamily: fonts.secondary
  },
  // Titles
  typoSectionTitle: {
    fontFamily: fonts.primary,
    fontSize: '13.5px',
    lineHeight: '15.82px',
    margin: 'none',
    padding: 'none',
    color: colors.grey10
  },
  typoSideBarSubSection: {
    fontFamily: fonts.primary,
    fontSize: '15.5px',
    fontWeight: 400,
    lineHeight: '18.16px',
    color: colors.sideBarSubSection,
    display: 'block',
    textDecoration: 'none'
  },
  typoSideBarLink: {
    fontFamily: fonts.primary,
    fontSize: '15.5px',
    fontWeight: 400,
    lineHeight: '18.16px',
    color: colors.sideBarLink,
    textDecoration: 'none',
    padding: '10px 16px',
    display: 'block'
  },
  typoMainTitle: {
    fontFamily: fonts.primary,
    fontSize: '24.2px',
    fontWeight: '500',
    marginBottom: '20.73px'
  },
  typoPartTitle: {
    fontFamily: fonts.primary,
    fontSize: '19.5px',
    lineHeight: '22.85px',
    marginTop: '55px'
  },
  typoEmphasized: {
    fontFamily: fonts.primary,
    fontSize: '16px',
    lineHeight: '18.75px',
    color: colors.black,
    fontWeight: 'bold',
    marginTop: '27.5px'
  },
  // Request tags
  typoRequestTag: {
    light: {
      fontFamily: fonts.primary,
      fontSize: '13px',
      color: colors.requestTag
    },
    dark: {
      get: {
        fontFamily: fonts.primary,
        fontSize: '13px',
        color: colors.blue
      },
      post: {
        fontFamily: fonts.primary,
        fontSize: '13px',
        color: colors.success
      },
      put: {
        fontFamily: fonts.primary,
        fontSize: '13px',
        color: colors.orange
      },
      delete: {
        fontFamily: fonts.primary,
        fontSize: '13px',
        color: colors.danger
      }
    }
  },
  requestTag: {
    light: {
      get: {
        background: colors.blue,
        borderRadius: '2px'  
      },
      post: {
        background: colors.success,
        borderRadius: '2px'  
      },
      put: {
        background: colors.orange,
        borderRadius: '2px'  
      },
      delete: {
        background: colors.danger,
        borderRadius: '2px'  
      }  
    },
    dark: {
      background: colors.consoleDark,
      borderRadius: '2px'
    }
  },
  sections: {
    sidebar: {
      background: colors.sideBackground
    }
  },
  // Console content
  consoleLink: {
    fontFamily: fonts.secondary
  },
  attributesTitle: {
    fontFamily: fonts.primary,
    color: colors.consoleWhite,
    fontSize: '16px',
    fontWeight: 700
  },
  attributesHead: {
    fontFamily: fonts.primary,
    fontSize: '14px',
    lineHeight: '16.41px',
    fontWeight: 400
  },
  consoleDescription: {
    fontFamily: fonts.primary,
    fontSize: '13.5px',
    color: colors.consoleBody,
    lineHeight: '15.82px'
  },
  consoleGrey: {
    fontFamily: fonts.secondary,
    fontSize: '13.5px',
    color: colors.consoleGrey
  },
  consoleGrey10: {
    fontFamily: fonts.secondary,
    fontSize: '14px',
    color: colors.consoleBody
  },
  consoleSubtitles: {
    fontFamily: fonts.secondary,
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '16.41px',
    color: colors.consoleGrey
  },
  // Console: custom styles of react-syntax-highlighter
  syntaxHighlight: {
    borderRadius: '2px',
    padding: '17px',
    fontSize: '14px',
    lineHeight: '18.46px',
    fontFamily: fonts.secondary,
    background: colors.consoleDark
  },
  // Sidebar logo
  typoLogo: {
    fontFamily: fonts.primary,
    fontSize: '19.5px',
    lineHeight: '22.85px',
    marginTop: '55px',
    color: colors.primary
  }
}

export default jssStyles