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
    maxWidth: "60vw",
    height: "auto",
    position: "relative"
  },
  heading: {
    marginTop: "0",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    position: "absolute",
    color: "white",
    opacity: 0.8,
    width: "90%",
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,255), rgba(255,0,0,0))"
  },
  img: {
    width: "100%",
    margin: "auto"
  }
}));

const ProductModal = ({ isOpen, handleClose, productModal }) => {
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
        {(productModal && (
          <div className={classes.paper}>
            <h1 className={classes.heading} id="modal-title">
              {productModal.name} (Продукт №{productModal.id})
            </h1>
            <img
              className={classes.img}
              src={productModal.image_url}
              alt="Product image"
            />
            <p id="modal-description">
              <div>Номер на продукта: {productModal.id}</div>
              <div>Описание: {productModal.description}</div>
            </p>
          </div>
        )) || <div />}
      </Fade>
    </Modal>
  );
};

export default ProductModal;
