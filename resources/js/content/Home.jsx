import React, { Component } from "react";
import { useRef } from 'react';
 

//same but with function
export default function Home(){
  const ref = useRef(null);
  const scrollToNextPage = () =>{
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="background-top">
        <div className="slog-container">
        <h2 className="slog">Investigating your business</h2>
        </div>
        <div onClick={scrollToNextPage}>
          <div className="info-click info-button">
            <span>Discover</span>
          </div>
          <div className="info-click info-go">
            <div className="info-square"></div>
          </div>
        </div>
      
      </div>
      <div className="page second-page" ref={ref}>
        
        <div className="flex-img-txt">
          <div className="slogo-pg">
            <div className="page-topic">
              <span className="page-topic-span">Consulting</span>
            
          </div>
          <div className="slog-small">Documents are in order</div>
          <div className="circle-button" onClick={scrollToNextPage}></div>
          </div>
          <div className="img-order">
          
          </div>
        </div>
      </div>
      <div className="page third-page">
      <div className="flex-img-txt">
          <div className="slogo-rigth-pg">
            <div className="page-topic">
              <span className="page-topic-span">Accounting</span>
          </div>
        
          <div>
            <img className="img-left" src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"></img>
          </div>
         
          
          
          </div>

          <div className="slog-small-right"><span>You can count on us</span></div>
         
        </div>
      </div>
     </div>
   
  );
}



//same but with class
/*
class Home extends Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
}
  
  scrollToNextPage(){
    debugger;
    this.ref.current?.scrollIntoView({ behavior: 'smooth' });
    //const ref = useRef(null);
    //const lastChildElement = ref.current?.lastElementChild;
    //lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  }

  
  render() {
    
    return (
      <div>
        <div className="background-top">
          <div className="slog-container">
          <h2 className="slog">Investigating your business</h2>
          </div>
          <div onClick={this.scrollToNextPage}>
            <div className="info-click info-button">
              <span>Discover</span>
            </div>
            <div className="info-click info-go">
              <div className="info-square"></div>
            </div>
          </div>
        
        </div>
        <div className="second-page" ref={this.ref}>EHEHHE</div>
       </div>
     
    );
  }
}
 
export default Home;*/


