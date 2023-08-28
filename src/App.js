import React from 'react';
import Header from "./header/Header";
import Fetch from './maincode/Fetch';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">

     <Header/>
      <div className="container">

      <div className="hd">
     <Fetch/>
     </div>
    
     </div>
     <div className="row mt-5">
     <Footer/>
     </div>
  
    </div>
  );
}
export default App;
