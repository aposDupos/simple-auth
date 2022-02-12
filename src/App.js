import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {ChangePassword} from "./pages/ChangePassword";
import {Register} from "./pages/Register";
import {BaseLayout} from "./layouts/BaseLayout";
import {RequireAuth} from "./layouts/RequireAuth";

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route element={<RequireAuth/>}>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/change-password'} element={<ChangePassword/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
