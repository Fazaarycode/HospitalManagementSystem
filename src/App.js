import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Routes/Nav';
import SideNavbar from './components/SideNavbar';
import Render from './components/Render';

function App() {
  return (
    <div className="App">
     <Nav/>
     <div className="container-fluid">
     <div className ="row">
     <div className="col-md-3">
     <SideNavbar/>
      </div>
      <div className="col-md-9">
      <Render/>
      </div>
     </div>
     </div>
    </div>
  );
}

export default App;
