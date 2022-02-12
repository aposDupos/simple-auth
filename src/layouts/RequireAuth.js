import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export const RequireAuth = ({children}) => {
    //Сделать хук для
    let auth = false
    let location = useLocation()
    if (auth && location.pathname !== '/change-password'){
        return <Navigate to={'/change-password'} state={{from: location}} replace/>
    }
    if (!auth && location.pathname === '/change-password') {
        return <Navigate to={'/'} state={{from: location}} replace/>
    }
    return <Outlet/>
}