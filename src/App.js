import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import 'boxicons'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>

    <BrowserRouter>

    <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>

      </Switch>

      
    <Footer/>

     
    </BrowserRouter>
    </>
  );
}

export default App;
