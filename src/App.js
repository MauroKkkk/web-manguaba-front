import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React, { useState } from 'react'





function App() {

  const [ dado, setDado ] = useState([""]);


  function receberDados () {
    axios.get("http://localhost:80/Receber")
    .then(response => {
      setDado(response.data)
    })
  } 
  return (
    <div className="App">
      <h3>{dado}</h3>
      <button onClick={() => receberDados()}>Receber Dados</button>
    </div>
  );
}

export default App;
