import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import './index.css';
import IndexPage from "./pages/IndexPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                element={<IndexPage/>}
                path="/"
            />
        </>
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
