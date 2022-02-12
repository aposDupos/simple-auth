import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Login} from "./pages/Login";
import {ChangePassword} from "./pages/ChangePassword";
import {Register} from "./pages/Register";

function App() {
    return (
        <>

            <Routes>
                <Route path={''} component={Login}/>
                <Route path={'register'} component={Register}/>
                <Route path={'change-password'} component={ChangePassword}/>
            </Routes>
        </>
    );
}

export default App;
