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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: "100px"
  },
  toolbar: {
    paddingTop: "100px",
    minWidth: "200px"
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div class="centralbalkan">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>Централен Балкан ЕООД</Toolbar>
      </AppBar>
      <Drawer open={true} variant="permanent">
        <div>
          <div className={classes.toolbar} />

          <List>
            <ListItem button onClick={() => alert("asd")}>
              <ListItemText primary="Item 1" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
