import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import { readCookie } from './common/index';
import { authCheck } from './utils/utilities'
import AddUser from './components/addUser';
import ChangeEmail from './components/updateEmail';
import ListUsers from './components/listUsers';
import DeleteUser from './components/deleteUser';

function App() {
  const [user, setUser] = useState("");
  const [photos,setPhotos] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);
  const [cookie,setCookie] = useState();
 
  console.log(loggedIn);
  console.log(setLoggedIn);
  console.log(cookie);

  async function loginWithToken(cookie) {
    const user = await authCheck(cookie);
    console.log(user);
    setUser(user);
    setCookie(cookie);
  }

  useEffect(() => {
    fetchImages();
    let cookie = readCookie('jwt_token');
    if (cookie !== false) {
      loginWithToken(cookie);
    }
    },[]);

  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response)
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
    }
  const logout = () => {
    document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
    setUser("");
  }
    
  return (
    <div className="App">
      <Login setter={setUser}/>
      <br></br>
      {{user} && <button onClick={logout}>Logout</button>}
      <br></br>  
      {{user} ? <h1>{user} logged in</h1> : <h1>logged out</h1>}
      <br></br>
      <AddUser setter={setUser}/>
      <ListUsers setter={setUser}/>
      <ChangeEmail setter={setUser}/>
      <DeleteUser setter={setUser}/>
      <br></br>
      {user ? photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" alt=""/>
            <h2>{item.author}</h2>
          </div>
        )
      })
      :
      <h1>Please Login</h1>
    }
 
      
    </div>
    
  );
}

export default App;