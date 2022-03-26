import Counter from "./Counter";
import Product from "./Product";
import { React, useState } from "react";
import "./product.css";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} />
      <Product title="Super Biscuit" price="50" counter={counter} />
      <Product title="Naswar" price="90" counter={counter} />
      <Product title="Asli Butt Karahi" price="47" counter={counter} />
    </div>
  );
}

export default App;
