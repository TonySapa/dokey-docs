import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { customStyles, labels } from './../../labels/labels.js'

const l = labels;
const categories = labels.sideBar.categories

const styles = (theme) => ({
  ...customStyles.navigator,
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  itemCategory: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  itemIcon: {
    marginRight: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2)
  }
});

const Navigator = (props) => {
  const { classes, ...other } = props;
  const [current, setCurrent] = useState(window.location.pathname)

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          <a href='/' style={{textDecoration:'none'}}>
            <h5 className={classes.logo}>
              {l.appName}
            </h5>
          </a>
          <span className={classes.version}>{l.appVersion}</span>
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
        <ListItemText>
          <Grid item xs>
            <TextField
              fullWidth
              variant='outlined'
              placeholder={l.sideBar.searchPlaceholder}
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
            />
          </Grid>
        </ListItemText>
        </ListItem>

        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, link, icon, active }) => (
              <Link to={link} className={classes.tab} onClick={() => link ? setCurrent(link) : null}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                >
                  {link === current && current !== undefined
                  ? <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                      className={classes.tabText}
                    >
                      {childId}
                    </ListItemText>
                  : <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      {childId}
                    </ListItemText>}
                </ListItem>
              </Link>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);