import './App.css';
import {useState, useEffect} from 'react';
import Login from './components/login';

function App() {
  const [user, setUser] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  useEffect(() => {fetchImages()},[]);
  

  const myArray = [{name:"Harry"},{name:"George"},{name:"Hermione"},{name:"Mafalda"}];
  
  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
  };

  return (
    <div className="App">

      <Login/>

      {}

      {/* button to be replaced with token check */}
      <button onClick={(event) => setLoggedIn(!loggedIn)}>Login or logout</button>
  
      {loggedIn ?
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
