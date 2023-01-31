import { useState } from "react";
import { login } from "../utils/utilities";
import setLoggedIn from "../App"

const Login = ({setter, token, setToken}) => {
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
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onClick={submitHandler}>Submit</button>
            <button onClick={() => {
                setLoggedIn(false);
                let name = 'jwt_token';
                document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                console.log(token)}}>
                    Logout</button>
        

        </form>
    )
}

export default Login;