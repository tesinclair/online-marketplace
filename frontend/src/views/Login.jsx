import { TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import AxiosCLI from 'axioscli.js';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
       <h1>login</h1>
       <div className = "form">
        <TextField
          id="outlined-controlled"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
        />
        <TextField 
          id="outlined-controlled"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          varient = "outlined"
          onSubmit={() => {
            url_endpoint = email + "+" + password;
            onLoginSubmit(url_endpoint).then((response) => {
              if(response.status == 401){
                <Alert severity="error">Credentials Did Not Match</Alert>;
              }else if(response.status == 200){
                <Redirect 
                  to = "/"
                  search = {"?usr=" + JSON.stringify(response.data)}
                />;
              }else{
                <Alert severity="warning">There was an error with your request, please try again</Alert>;
              }
            })
          }}
        >
          Submit
        </Button>
       </div>
    </div>

  );
}

function onLoginSubmit(endpoint){
  return AxiosCLI.cliget("/login/" + endpoint).then((response)=>{
    return response;
  });
}
export default Login;