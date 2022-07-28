
import './App.css';
import React from 'react';
import Navbar from './layouts/Navbar';
// import Footer from './layouts/Footer';
import Recipe from './components/Recipe';


function App() {
  return (
    <>
    <Navbar/>
      <div style={{height:"80vh"}} className="container my-2 mx-2">
        <Recipe/>
      </div>
    {/* <Footer/> */}
    </>
  );
}

export default App;
