import React, { Component } from "react";
import {
    BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import Home from "./content/Home";
import Stuff from "./content/Stuff";
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
            <h1>Simple SPA</h1>
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stuff">Stuff</Link></li>
            
            </ul>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/stuff" element={<Stuff/>}/>
                </Routes>
            </div>
            </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;