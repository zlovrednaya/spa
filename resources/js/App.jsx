import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import {  BrowserRouter as Router,Route, Routes} from "react-router-dom";
//import HelloReact from './components/HelloReact';
import Home from "./components/Home";
import Offset from "./components/Offset";
//import NotesAdd from "./components/NotesAdd";
import NotesContent from "./components/NotesContent";
import NotesAddButton from "./components/NotesAddButton";
import NotesForm from "./components/NotesForm";
import ConfirmationForm from './components/ConfirmationForm';
import axios from 'axios';
import { createContext } from "react";
export const ThemeContext = createContext("Default Value");



  class App extends React.Component {

  

  }


  /*const root = ReactDOM.createRoot(document.getElementById('body_part'))
  root.render(<React.StrictMode>
    <Router>
      <App params={123} />
      </Router>
    </React.StrictMode>);*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <Home />
);


const offsetElt = document.getElementById('offsetEl');
if(offsetElt){
    let offsetData = offsetElt.getAttribute('offset');
        ReactDOM.createRoot(offsetElt).render(
          <Offset offsetData={offsetData} />
        );
}




/*
тут большие датасеты - поэтому лучше это не делать так
if (document.getElementById('table-react')) {
  
  debugger;
  const thisElement = document.getElementById('table-react');
  const root = ReactDOM.createRoot(thisElement);
  let props = Object.assign({}, thisElement.dataset);
  console.log(props);
 // ReactDOM.createRoot(document.getElementById('table-react')).render(<App list={props.list} />, thisElement);
 root.render(<React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>);
  
}*/
export default App;