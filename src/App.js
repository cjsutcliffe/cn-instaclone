import './App.css';
import {useState, useEffect} from 'react';
import Login from './components/Login';
import { readCookie } from './common';
import { authCheck } from './utils/utilities';


function App() {
  const [user, setUser] = useState("");
  const [photos,setPhotos] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);
  const [cookie,setCookie] = useState();

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

  return (
    <div className="App">
      <Login setter={setUser}/>
      <h1>{user} is logged in</h1>
  
      {user ?
      photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" alt="" />
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
