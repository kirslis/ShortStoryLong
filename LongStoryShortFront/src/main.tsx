import './index.css'
import ReactDOM from "react-dom/client";
import {baseTheme} from "./props/theme.ts";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import React from 'react';
import {LoginScreen} from "./screens/LoginScreen.tsx";
import {CreateAccountScreen} from "./screens/CreateAccountScreen.tsx";
import {MainWindow} from "./screens/MainWindow.tsx";
import {CharacterList} from "./screens/CharacterList/CharacterList.tsx"
import {Header} from "./components/Header/Header.tsx";
import App from "./App.tsx";

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!)

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="*" element={<App/>}/>
        <Route>
            <Route path="characters" element={<Header/>}>
                <Route path="" element={<MainWindow/>}/>
                <Route path="hero" element={<CharacterList/>}/>
            </Route>
        </Route>
        <Route path="/login" element=<LoginScreen/>/>
        <Route path="/create_account" element=<CreateAccountScreen/>/>
    </Route>
))

document.body.style.backgroundColor = baseTheme.colors.primary

function render() {
    sessionStorage.setItem("redactingCharacterId", "1")
    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}

setInterval(render, 200);