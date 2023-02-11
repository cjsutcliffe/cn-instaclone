
import { useState } from "react";
import { deleteUser } from "../utils/utilities";

const DeleteUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [deleteUser, setDeleteUser] = useState();


  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("Deleting User")
    await deleteUser(username, email, password, setter);
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(event) => setUsername(event.target.value)} />
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(event) => setPassword(event.target.value)} />
     
     <button onClick={submitHandler}> Delete User </button>
    </form>
  )
}

export default DeleteUser;