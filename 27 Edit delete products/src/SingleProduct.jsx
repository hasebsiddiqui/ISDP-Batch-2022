import { Button } from "@material-ui/core";
import React from "react";
import productService from "./services/ProductService";
import { withRouter } from "react-router";
const SingleProduct = (props) => {
  let { product, onDelete } = props;
  return (
    <div>
      <h4>{product.name}</h4>
      <h6>{product.price}</h6>
      {/* <button>save</button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Update product" + product._id);
          // console.log(props);
          props.history.push("/products/update/" + product._id);
        }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          productService
            .deleteProduct(product._id)
            .then((res) => {
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Delete
      </Button>
      <hr />
    </div>
  );
};

export default withRouter(SingleProduct);
