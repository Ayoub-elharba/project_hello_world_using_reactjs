import React from 'react'
import './style.css';

function Header() {
    
  return (
    <div> 
    <div id="logo-header">
        <img id="logo-img" src={require('./logo.png')} alt="" />
    </div>

    <div id="header" style={{height: '20rem'}} className="bg-primary" >
        <div id="header-background" style={{width:'100%', height:'100%'}}>

            <div className="p-5" style={{direction:"rtl",fontSize: "50px", marginRight: "100px", color: "white"}}>
                <h1 style={{fontSize: "70px", fontWeight: "800"}}>World</h1>
                <h1 style={{fontSize: "90px", fontWeight: "800"}}>العالم</h1>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Header;



