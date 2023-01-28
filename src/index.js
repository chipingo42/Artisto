import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cardspages from './Pages/Detailspage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Detailspage/:artId",
    element: <Cardspages />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
