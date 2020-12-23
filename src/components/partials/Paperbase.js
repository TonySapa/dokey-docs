import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { coreStyling, customStyles, labels } from '../../labels/labels.js';
import Navigator from './Navigator';
//import Content from '../Content';
import Header from './Header';

const l = labels;
const s = customStyles.paperbase;

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made with ❤️ using '}
      <Link style={customStyles.links} color="inherit" href="https://www.github.com/TonySapa/dockee-docs">
        {l.appName}
      </Link>{''}
      {/*new Date().getFullYear()*/}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme(s.theme);

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#fffff',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: '#ee8e6b',
        backgroundImage: 'linear-gradient(315deg, #ee8e6b 0%, #ef6da0 74%)'
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'transparent'//'#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    //display: 'flex',
    //flex: 1,
    flexGrow: 1,
    padding: theme.spacing(0, 4),//theme.spacing(6, 4),
    background: 'rgba(245,227,220,0.4)',
  },
  sideIndex: {
    listStyleType: 'none',
  },
  indexLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.5)'
  },
  footer: {
    padding: theme.spacing(2),
    background: 'rgba(245,227,220,0.4)',
  },
};

const html = (element, content, req) =>
  element === 'h1'
    ? <h1><span style={coreStyling.req[req]}>{req}</span>{content}</h1>
    : element === 'h2'
      ? <h2>{req}{content}</h2>
      : element === 'h3'
        ? <h3>{content}</h3>
        : null

const Paperbase = (props) => {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const setRef = (title) => title.replace(/ /g, '-').toLowerCase()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>

          <Header onDrawerToggle={handleDrawerToggle} />

          <main className={classes.main}>
            <Grid container spacing={3} style={{display:'flex'}}>

              {/* Main content */}
              <Grid item xs={12} sm={8} style={{minWidth: '300px'}}>
                {props.sections
                  ? props.sections.map(s => (
                      <div id={s.title ? setRef(s.title) : null}>
                        {s.type && s.title ? html(s.type, s.title, s.req) : null}
                        {s.paragraph ? s.paragraph : null}
                      </div>
                    ))
                  : <h1>{props.id}</h1>}
              </Grid>

              {/* Right index */}
              <Grid item xs={12} sm={4} style={{order: 0}}>
                <ul className={classes.sideIndex}>
                  {props.sections
                    ? props.sections.map(s => (
                      <li>
                        <a className={classes.indexLink} href={`${window.location.href}#${s.title ? setRef(s.title) : null}`}>{s.title ? s.title : null}</a>
                      </li>
                    ))
                    : null}
                </ul>
              </Grid>
            </Grid>
            
          </main>

          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);