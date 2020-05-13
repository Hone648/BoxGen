import React from 'react';
import './App.css';
import { useState } from 'react';
import BoxForum from './components/BoxForum';
import BoxDisplay from './components/BoxDisplay';

function App() {
const [boxes, setBoxes] = useState([{
  color:"red", 
  height:"150",
  style: {
    display: "inline-block",
    border: "1px solid red",
    height: "150px"
  }
}]);


  return (
    <div className="App">
     <h1 className="col.sm-5">Box Generator</h1>
     <BoxForum boxes={boxes} setBoxes={setBoxes}/>
     <BoxDisplay boxes={boxes} />
    </div>
  );
}

export default App;
