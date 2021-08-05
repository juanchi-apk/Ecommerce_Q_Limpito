import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar/Navbar';
//import Home from './home/Home.js'
import Admin from './admin/Admin';
import ShopContainer from './catalog/ShopContainer';
import ShopCart from './shopcart/ShopCart';

import { BrowserRouter , Switch, Route } from "react-router-dom";
import {store} from './store/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/"><App /></Route>
        <Route path="/admin"><Admin/></Route>
        <Route path="/cart"><ShopCart/></Route>
        <Route path="/store"><ShopContainer/></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
