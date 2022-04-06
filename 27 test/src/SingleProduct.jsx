import React from "react";
const SingleProduct = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <button>save</button>
      <hr />
    </div>
  );
};

export default SingleProduct;
