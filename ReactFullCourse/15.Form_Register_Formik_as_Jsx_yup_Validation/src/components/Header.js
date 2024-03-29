import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from '../store/AppContext';

export default function Header() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  //we can also create a function as method so that from anywhere we can call and change the value
  const [isLoggedIn, user, changeStatus] =  useContext(AppContext);
  
  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //setIsLoggedIn(false);
        changeStatus("newmancroos","Success");
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }

  return (
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
          <li className="mr-5">
            <NavLink to="/" exact activeClassName="underline text-blue-200">Home</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/gallery"  activeClassName="underline  text-blue-200">Gallery</NavLink>
          </li>
      </ul>

      <ul className="flex justify-between px-10">
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login"  activeClassName="underline text-blue-200">Login</NavLink>
          )}
        </li>
        {!isLoggedIn && (
          <li className="ml-5">
              <NavLink to="/signup"  activeClassName="underline text-blue-200">Signup</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}