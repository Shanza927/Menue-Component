import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from "./components/Component1";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
<div className="app">
  <Navbar dark color="primary" >
    <div className="container">
      <NavbarBrand  href="/"> Main Menue Page </NavbarBrand>
    </div>
  </Navbar>
<Component1/>
</div>
   
    
  );
}

export default App;
