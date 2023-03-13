import { TextField } from "@mui/material";
import { useState } from "react";

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
       </div>
    </div>

  );
}
export default Login;