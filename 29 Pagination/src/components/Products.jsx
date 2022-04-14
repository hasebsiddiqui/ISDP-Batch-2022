import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
// import axios from "axios";
import productService from "../services/ProductService";
import {
  Backdrop,
  CircularProgress,
  Fab,
  Grid,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AddIcon from "@material-ui/icons/Add";
import { toast } from "react-toastify";
import userService from "../services/UserService";
import { DragHandle } from "@material-ui/icons";
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
  const [page, setPage] = useState(
    props.match.params.page ? props.match.params.page : 1
  );
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getProducts = () => {
    setLoading(true);
    productService
      .getAllProducts(page, perPage)
      .then((res) => {
        setProducts(res.result);
        setTotal(res.total);
        toast.success("Data Loaded");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in Server");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(getProducts, [page, perPage]);
  return (
    <div>
      {userService.isAdmin() ? (
        <>
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
        </>
      ) : (
        <></>
      )}

      <h1>All products</h1>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Pagination
        count={Math.ceil(total / perPage)}
        onChange={handlePageChange}
      />
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={perPage}
        onChange={(event) => {
          setPerPage(event.target.value);
        }}
      >
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      <Grid container spacing={3}>
        {products.length == 0 ? (
          <div>No products</div>
        ) : (
          products.map((product, index) => {
            return (
              <Grid item xs={3} key={index}>
                <SingleProduct product={product} onDelete={getProducts} />
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Products;
