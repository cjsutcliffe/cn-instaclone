import { useState } from "react";
import { updateEmail } from "../utils/utilities";

const ChangeEmail = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const [updatedEmail, setUpdatedEmail] = useState();

    const submitHandler = async (event) => {
    event.preventDefault();
    setUpdatedEmail(email);
    await updateEmail(username, email);
    };
    return (
    <div id="email-container">
    <h2>Update your email here:</h2>
    <form onSubmit = {submitHandler}>
        <input placeholder="Type your new email here" onChange ={ (e) =>  setEmail(e.target.value)} />
        <button className="main-button" id="update-button" type="submit">Update Email</button>
    </form>
    <p>{updatedEmail ? `Your email has been updated to ${updatedEmail}` : ""}</p>
    </div>
    )
}

export default ChangeEmail;