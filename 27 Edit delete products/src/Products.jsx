import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
// import axios from "axios";
import productService from "./services/ProductService";
import {
  Backdrop,
  CircularProgress,
  Fab,
  Grid,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const Products = (props) => {
  const useStyles = makeStyles((theme) => ({
    addBtn: {
      position: "fixed",
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("Component rendered");
  const getProducts = () => {
    setLoading(true);
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(getProducts, []);
  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.addBtn}
        onClick={() => {
          props.history.push("/products/add");
          console.log("Add product");
        }}
      >
        <AddIcon />
      </Fab>
      <h1>All products</h1>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={3}>
        {products.map((product, index) => {
          return (
            <Grid item xs={3} key={index}>
              <SingleProduct product={product} onDelete={getProducts} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
