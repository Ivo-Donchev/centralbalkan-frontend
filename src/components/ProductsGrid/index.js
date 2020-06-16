import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "white"
  }
}));

const ProductsGrid = ({ categoryName, products, openProductModal }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{categoryName}</h1>
      <GridList cellHeight={400} cols={3} spacing={20}>
        {products.map(product => (
          <GridListTile
            key={product.id}
            cols={product.cols || 1}
            onClick={() => openProductModal(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <GridListTileBar
              title={product.name}
              titlePosition="top"
              actionPosition="left"
              className="titleBar"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProductsGrid;
