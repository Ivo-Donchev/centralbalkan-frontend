/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./layout.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: "100px"
  },
  toolbar: {
    paddingTop: "100px",
    width: "350px"
  },
  drawer: {
    width: "350px",
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Layout = ({ categories, onCurrentCategoryChange, children }) => {
  const classes = useStyles();
  console.log("categories: ", categories);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>Централен Балкан ЕООД</Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} open={true} variant="permanent">
        <div>
          <div className={classes.toolbar} />

          <List>
            {categories.map(category => (
              <ListItem
                button
                onClick={() => onCurrentCategoryChange(category.id)}
              >
                <ListItemText
                  key={category.id}
                  primary={`${category.name} (${category.products_count})`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
