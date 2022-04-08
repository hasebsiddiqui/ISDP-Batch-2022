import MenuItem from "./MenuItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ContactUS from "./ContactUs";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
function App() {
  return (
    <Router>
      <div className="App">
        <MenuItem />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/add" component={AddProduct} />
          <Route path="/contact-us" component={ContactUS} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
