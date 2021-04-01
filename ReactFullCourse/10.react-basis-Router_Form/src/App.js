import './assets/css/style.css';
import DisplayImage from './components/displayimage';
import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
// import Home from './page/Home';
// import Login from './page/Login';
// import Gallery from './page/Gallery';
import routes from './utils/routes';
function App() {
  return (
      // <Router> 
      //     <Switch>
      //       <Route path="/" exact={true} >
      //         <Home />
      //       </Route>
      //       <Route path="/gallery">
      //         <Gallery />
      //       </Route>
      //       <Route path="/login">
      //         <Login />
      //       </Route>
      //   </Switch>
      // </Router>
      // https://reactrouter.com/web/guides/quick-start
      <Router> 
          <Header />
          <Switch>
            {
              routes.map((route, index) => (
                <Route  
                  key={index}
                  path={route.path} 
                  exact={route.exact} 
                  component={route.component} />
              ))}
        </Switch>
      </Router>
  )}
export default App;
