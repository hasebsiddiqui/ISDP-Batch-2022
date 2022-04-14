import { Button } from "@material-ui/core";
import React from "react";
import productService from "../services/ProductService";
import { withRouter } from "react-router";
import userService from "../services/UserService";
const SingleProduct = (props) => {
  let { product, onDelete } = props;
  return (
    <div>
      <img src="https://api.lorem.space/image/shoes?w=150&h=150" alt="" />
      <h4>{product.name}</h4>
      <h6>{product.price}</h6>
      {userService.isAdmin() ? (
        <>
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
        </>
      ) : (
        <>
          <Button variant="contained" color="primary">
            Add To Cart
          </Button>
        </>
      )}

      <hr />
    </div>
  );
};

export default withRouter(SingleProduct);
