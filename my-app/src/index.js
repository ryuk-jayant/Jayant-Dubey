import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,Router, Switch, Route, RouterProvider } from 'react-router-dom';
import App from "./App";
import Blog from "./components/Blog";
import Findme from "./components/Findme";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/Blog",
    element:<Blog/>,
  },
  {
    path:"/Contact",
    element:<Findme/>,
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
