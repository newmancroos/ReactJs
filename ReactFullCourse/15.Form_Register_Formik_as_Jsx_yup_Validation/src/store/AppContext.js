import React from "react";

const AppContext = React.createContext({isLoggedIn : false, user:{}, changeState: () =>{}});

export default AppContext;