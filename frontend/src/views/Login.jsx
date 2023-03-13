import { TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { redirect } from "react-router-dom";
import AxiosCLI from '../../axioscli.js';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e){
    e.preventDefault();
    console.log("here");
    let url_endpoint = email + "+" + password;
    onLoginSubmit(url_endpoint).then((response) => {
      if(response.status == 401){
        <Alert severity="error">Credentials Did Not Match</Alert>;
      }else if(response.status == 200){
        redirect("/?usr=" + JSON.stringify(response.data));
      }else{
        console.log("here");
        <Alert severity="warning">There was an error with your request, please try again</Alert>;
      }
    })
  }
  return (
    <div>
       <h1>login</h1>
       <form onSubmit={submitHandler}>
        <TextField
          id="outlined-controlled"
          required={true}
          type="email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
        />
        <TextField 
          id="outlined-controlled"
          required={true}
          type="password"
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          varient = "outlined"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </div>

  );
}

function onLoginSubmit(endpoint){
  return AxiosCLI.cliget("/login/" + endpoint).then((response)=>{
    return response;
  });
}
export default Login;