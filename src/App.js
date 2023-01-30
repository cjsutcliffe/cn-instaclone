import './App.css';
import Box from './components/box';
import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      {/* {&& is the equivalent of an IF statement} */}
      {/* {* and : are the equivalent of an IF statement} */}
      <input onChange={(event) => setUser(event.target.value)}/>
      {user && <Box name={user}/>}
      {/* If user exists then display the username in the box component*/}
      {(user == "Harry") ? <Box name="user logged in" /> : <Box name="please login"/>}
      <Box name="George"/>
      <Box name="Hermione"/>
      <Box name="Mafalda"/>
      <Box name="Percy"/>
    </div>
  );
}

export default App;
