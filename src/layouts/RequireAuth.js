import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export const RequireAuth = () => {
    const {isAuth} = useSelector(state => state.user)
    let location = useLocation()
    if (isAuth && location.pathname !== '/change-password') {
        return <Navigate to={'/change-password'} state={{from: location}} replace/>
    }
    if (!isAuth && location.pathname === '/change-password') {
        return <Navigate to={'/'} state={{from: location}} replace/>
    }
    return <Outlet/>
}