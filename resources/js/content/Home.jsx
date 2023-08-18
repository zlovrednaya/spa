import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="background-top">
        <div className="slog-container">
         <h2 className="slog">Investigating your business</h2>
        </div>
        <div className="info-click info-button">
          <span>Discover</span>
        </div>
        <div className="info-click info-go">
          <div className="info-square"></div>
        </div>
       
      </div>
    );
  }
}
 
export default Home;