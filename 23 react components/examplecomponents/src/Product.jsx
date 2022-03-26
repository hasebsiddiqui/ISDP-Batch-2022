import React from "react";

function Product(props) {
  var title = props.title;
  var price = props.price;
  const counter = props.counter;
  var prodPriceCss = price <= 50 ? "cheapprod" : "expensiveprod";
  return (
    <div>
      <h1 style={{ color: "red" }}>Product Title: {title}</h1>
      {counter}
      <h3 className={prodPriceCss}>Product Price: {price}</h3>
      <p className="product">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure
        necessitatibus suscipit, repudiandae veniam asperiores illum delectus
        sit excepturi, exercitationem nisi quibusdam. Aut exercitationem ad
        earum in sed sit. Veritatis aliquid alias omnis reprehenderit ipsum
        libero animi, dolor aut maxime adipisci eligendi impedit porro aliquam
        dolorum quaerat culpa voluptatibus sapiente.
      </p>
    </div>
  );
}
export default Product;
