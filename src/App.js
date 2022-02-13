import React, {useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {message} from 'antd'
import {Login} from "./pages/Login";
import {ChangePassword} from "./pages/ChangePassword";
import {Register} from "./pages/Register";
import {BaseLayout} from "./layouts/BaseLayout";
import {RequireAuth} from "./layouts/RequireAuth";
import {useSelector} from "react-redux";

function App() {
    const navBar = [
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/change-password',
            element: <ChangePassword/>
        },
    ]
    const {status: {type, text}} = useSelector(state => state.user)
    useEffect(() => {
        if (type === 'success') message.success(text)
        if (type === 'info') message.info(text)
        if (type === 'error') message.error(text)
    }, [text, type])

    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route element={<RequireAuth/>}>
                    {
                        navBar.map(({path, element}) => (
                            <Route path={path} element={element}/>
                        ))
                    }
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
