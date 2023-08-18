import React, { Component } from "react";
import {
    BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import Home from "./content/Home";
import About from "./content/About";
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <div className="row">
                    <div className="header-common">
                        <h1 className="logo">SPY pro</h1>
                        <ul className="header">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;