
import { useState } from "react";
import { listUsers } from "../utils/utilities";

const ListUsers = ({setter}) => {
  const [userList, setUserList] = useState([]);

  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log("executing User List request")
    await listUsers(setUserList);
    console.log(userList, "submit handler")
  }

  return (
    <form onSubmit={submitHandler}>
        {/* code to list users goes here */}
        {userList.map((item,index) => {return (
        <div>
          <p>{item.username} {item.email}</p>
        </div>
      )})}
      <button onClick={submitHandler}> List Users </button>
   
    </form>
  )
}

export default ListUsers;