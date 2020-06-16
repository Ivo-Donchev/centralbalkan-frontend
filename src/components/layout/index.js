/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import ContactsModal from "../../components/ContactsModal";

import "./styles.css";

const useStyles = withStyles(theme => ({
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
  },
  orderButton: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    padding: "15px"
  }
}));

class Layout extends React.Component {
  state = {
    isContactModalOpen: false
  };
  openContactsModal = () => this.setState({ isContactModalOpen: true });
  closeContactsModal = () => this.setState({ isContactModalOpen: false });

  render() {
    const {
      classes,
      categories,
      onCurrentCategoryChange,
      children
    } = this.props;

    return (
      <div className={`${classes.root} centralbalkan`}>
        <CssBaseline />
        <AppBar position="fixed" className={`${classes.appBar} topMenu`}>
          <Toolbar className="heading">Централен Балкан ЕООД</Toolbar>
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
        <ContactsModal
          isOpen={this.state.isContactModalOpen}
          handleClose={this.closeContactsModal}
        />
        <Button
          onClick={this.openContactsModal}
          className={classes.orderButton}
          variant="contained"
          color="primary"
        >
          Поръчай
        </Button>
        <footer></footer>
      </div>
    );
  }
}

export default useStyles(Layout);
