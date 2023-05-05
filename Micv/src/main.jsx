import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from "./components/inicio/inicio";
import Sobremi from "./components/sobremi/Sobremi"
import Portafolio from "./components/portafolio/Portafolio";


const routesFromElements = createRoutesFromElements (
<Route>
    <Route index element={<Inicio />} />
    <Route path='/' element={<Inicio />} />
    <Route path='/inicio' element={<Inicio />} />
    <Route path='/sobremi' element={<Sobremi />} />
    <Route path='/portafolio' element={<Portafolio />} />
</Route>
);
const router = createBrowserRouter(routesFromElements);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
