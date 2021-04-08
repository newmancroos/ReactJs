import React, {useContext} from "react";
import AppContext from "../../store/AppContext";
import {Redirect,Route} from "react-router-dom";
import Loading from "../../components/Loading";
export default function AuthRoute(props){
    const [isLoggedIn] = useContext(AppContext)

    if(isLoggedIn===null) return <Loading />;
    if(!isLoggedIn) return <Route {...props} />;

    return <Redirect to="/" />
}