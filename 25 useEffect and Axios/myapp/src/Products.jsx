import React, { useState, useEffect } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Backdrop, CircularProgress, makeStyles, Snackbar } from "@material-ui/core";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  console.log("Component rendered");
  useEffect(() => {
    axios
      .get("http://localhost:8080/apppi/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        <Snackbar>sdddddddddddddss</Snackbar>
        // <Alert severity="error">This is an error message!</Alert>
        // setError(true);
        console.log(err);
      }).finally(()=>{
        setLoading(false);
      });
  }, []);
  const useStyles = makeStyles((theme) => ({
    // root: {
    //   backgroundColor: theme.palette.background.paper,
    //   width: 500,
    //   position: 'relative',
    //   minHeight: 200,
    // },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },

  }));
  const classes = useStyles();
  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Products</h1>


      <div>
        {products.map((product, index) => {
          return <SingleProduct key={index} product={product} />;
        })}
      </div>

    </div>
  );
};

export default Products;
