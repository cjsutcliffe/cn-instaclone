import { useState } from "react";
import { login, createUser } from "../utils/utilities";
import {setLoggedIn, setUser} from "../App"

const AddUser = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing add user request")
        //create user in utils
        await createUser(username,email,password,setter);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onClick={submitHandler}>Add User</button>
        </form>
    )
}

export default AddUser;