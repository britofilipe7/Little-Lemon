import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import React from 'react';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {

  return (
    <>
    <React.Fragment>
      <Nav/>
    </React.Fragment>
      <Routing/>
      <Footer/>
    </>
  );
}

export default App;
