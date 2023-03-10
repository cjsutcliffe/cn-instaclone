import { useState } from "react";
import { login } from "../utils/utilities";

const Login = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing login request")
        await login(username,email,password,setter);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)} placeholder='Username'/>
            <input onChange={(event) => setEmail(event.target.value)} placeholder='Email'/>
            <input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Password'/>
            <button onClick={submitHandler}>Login</button>
        </form>
    )
}

export default Login;