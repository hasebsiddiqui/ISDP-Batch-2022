import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
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
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
            <Grid item xs={3}>
              <SingleProduct key={index} product={product} />;
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
