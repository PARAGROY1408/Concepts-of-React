import React, { useState } from 'react';
import About from './About'
import Contact from './Contact'
import CreateUser from './CreateUser'
import Home from './Home'
import Users from './Users'  // basically eik nya component banaya hai usse yahan pr import kr diya hai
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom' // router ko bhi import tu krna padega..
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';

function App() {
  //const[name,setName]=useState("parag roy"); 
  return (
    <div className="App">
      <Router>
        <h1>Hello from react....</h1>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="./">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="./About">About Us</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="./Contact">Contact Us</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="./List">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="./CreateUser">Create User</Link></Nav.Link>
          </Nav>
        </Navbar>
        <br /><br />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/List">
            <Users />
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="/CreateUser">
            <CreateUser></CreateUser>
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// yahan pr h1 ke baad vo ayega jo About mei define kiya hai....
// isiliye start mei he uss About.js ko import kr liya hai..
// <Contact/> pehle iss compoent ko import kr do start mei aur phir use krna hai....return function ke ander.
// contact file ko yahan imprt krne se pehle contact file ke last mei export ki line bhi likh do
// return fun ke ander pehle eik parent div bna do uske baad sara content usme daal do aur then return it
//<About name="parag roy"/> basically hame App.js se eik property ko pass kiya hai About ke ander..
// <About name={name}/>
// <Users></Users>
// <CreateUser></CreateUser>