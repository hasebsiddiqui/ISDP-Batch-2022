import MenuItem from "./components/MenuItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ContactUS from "./components/ContactUs";
import Login from "./auth/Login";
import { Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import Updateproduct from "./components/Updateproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./auth/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <MenuItem />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/products/add" component={AddProduct} />
          <Route path="/products/update/:id" component={Updateproduct} />
          <Route path="/products/:page?" component={Products} />
          <Route path="/contact-us" component={ContactUS} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
