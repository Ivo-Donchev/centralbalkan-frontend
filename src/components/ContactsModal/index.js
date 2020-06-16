import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "40vw",
    maxWidth: "80vw",
    height: "auto",
    position: "relative"
  }
}));

const ContactsModal = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <h1 className={classes.heading} id="modal-title">
            За поръчки и повече информация
          </h1>
          <div>
            <div>Адрес: гр. Габрово, ул. Вишеград, ...</div>
            <div>Телефон за контакти: 0888 888 888</div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ContactsModal;
