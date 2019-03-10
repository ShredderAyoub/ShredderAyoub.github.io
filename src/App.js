import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import Navbar from'./components/Navbar';
import  Shoplist from'./components/Shoplist';
import  Details from'./components/Details';
import  Preflist from'./components/Preflist';
import  Default from'./components/Default';
import Shop from './components/Shop';
import Register from './components/reg';
import Login from './components/log';

class App extends Component {
  render() {
    return (
     <React.Fragment>
     <Navbar></Navbar>
     <Switch>
       <Route exact path='/' component={Shoplist}/>
       <Route exact path='/details' component={Details}/>
       <Route exact path='/Preflist' component={Preflist}/>
       <Route exact path='/register' component={Register}/>
       <Route exact path='/login' component={Login}/>
       
       <Route component={Default}/>
     </Switch>
     
     
     </React.Fragment>
    );
  }
}

export default App;
