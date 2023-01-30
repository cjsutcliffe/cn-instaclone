import './App.css';
import Box from './components/box';
import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState("");
  const [photos, setPhotos] = useState([]);

  

  const myArray = [{name:"Harry"},{name:"George"},{name:"Hermione"},{name:"Mafalda"}];
  
  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
  };

  useEffect(() => {fetchImages()},[]);

  // for (let index = 0; index < myArray.length; index++) {
  // const element = myArray[index];
  //   console.log(element);  
  // };
   // This can be rewritten as a map function and the map function can be placed in the JSX below

  return (
    <div className="App">
      {/* <button onClick={(event) => fetchImages()}>Fetch Images</button> */}
      {photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" alt="" />
            <h2>{item.author}</h2>
          </div>
        )
      })}
      {/* {&& is the equivalent of an IF statement} */}
      {/* {* and : are the equivalent of an IF statement} */}
      {/* <input onChange={(event) => setUser(event.target.value)}/>
      {user && <Box name={user}/>} */}
      {/* If user exists then display the username in the box component*/}
      {/* {(user == "Harry") ? <Box name="user logged in" /> : <Box name="please login"/>} */}
   
      {/* {myArray.map((item,index) => {return (
        <div>
          <Box name={item.name}/>
          
        </div>
      )})} */}
      {/* <img src='https://picsum.photos/200' alt="Stock Photo"/> */}
    </div>
  );
}

export default App;
