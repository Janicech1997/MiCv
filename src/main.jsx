import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from "./components/inicio/Inicio";


const routesFromElements = createRoutesFromElements (
<Route>
    <Route index element={<Inicio />} />
    <Route path='/' element={<Inicio />} />
    <Route path='/inicio' element={<Inicio />} />
</Route>
);
const router = createBrowserRouter(routesFromElements);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
