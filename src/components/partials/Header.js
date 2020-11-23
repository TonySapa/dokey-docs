import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
/*import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';*/
import Grid from '@material-ui/core/Grid';
/*import HelpIcon from '@material-ui/icons/Help';
import PaymentIcon from '@material-ui/icons/Payment';*/
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
/*import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';*/
import Toolbar from '@material-ui/core/Toolbar';
/*import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';*/
import { withStyles } from '@material-ui/core/styles';
import { labels, customStyles } from './../../labels/labels.js';

const l = labels;
const s = customStyles.header;


const styles = (theme) => ({
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  link: {
    color: s.lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: s.lightColor,
  }
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="relative" elevation={0} style={{background:'rgba(245,227,220,0.4)'}}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);