import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import userService from "./services/UserService";
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    userService
      .signup(name, email, password)
      .then((res) => {
        toast.success("Signup Successful");
        // console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div>
      <h1>Signup</h1>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "5px" }}
            onClick={handleSignup}
          >
            Signup
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Signup;
