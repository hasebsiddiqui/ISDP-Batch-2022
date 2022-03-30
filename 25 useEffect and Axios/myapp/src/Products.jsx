import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  console.log("Component rendered");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.length == 0 ? (
        error ? (
          <div>Error</div>
        ) : (
          <div>Loading</div>
        )
      ) : (
        <div>
          {products.map((product, index) => {
            return <SingleProduct key={index} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
