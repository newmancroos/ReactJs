import './assets/css/style.css';
import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router,Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import routes from './utils/routes/routes';
import AppContext from './store/AppContext';
function App() {
  //const AppContext = React.createContext({loggedIn : false, user:{}});
  const [isLoggedIn, setIsLoggedIn] =useState(null);
  const [user, setUser] = useState({});  

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        console.log("Logged In");
      }
      else{
        setIsLoggedIn(false);
        setUser({});
      }
    });
  }, []);

  return (
      <Router> 
        <AppContext.Provider value={[isLoggedIn, user]}>
          <Header />
          <Switch>
            {
              // routes.map((route, index) =>{ 
              //   if(route.path === '/login')
              //   {
              //     if(isLoggedIn) return <Redirect  to="/" />
              //   }
              //   else
              //   {
              //     return(
              //       <Route  
              //         key={index}
              //         path={route.path} 
              //         exact={route.exact} 
              //         component={route.component} />
              //       )
              //   }
              // })
          
              routes.map((route, index) =>{ 
                // if(route.path === '/login')
                if(route.protected === 'guest')
                {
                  //if(isLoggedIn) return <Redirect  to="/" />
                  return (
                    <GuestRoute  
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      component={route.component} />  
                  )
                }

                //if(route.path === "/gallery")
                if(route.protected === "auth")
                {
                  return(
                  <AuthRoute  
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      component={route.component} />
                      )
                }
                
                  return(
                    <Route  
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      component={route.component} />
                    )

              })

          }
          </Switch>
        </AppContext.Provider>
      </Router>
  )
}
export default App;
