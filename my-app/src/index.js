import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import Blog from "./components/Blog";
import Findme from "./components/Findme";
import Test from "./components/Blog/test.js";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/Jayant-Dubey/",
    element: <App/>,
  },
  {
    path:"/Blog",
    element:<Blog/>,
  },
  {
    path:"/Contact",
    element:<Findme/>,
  },
  {
    path:"/Blog/:id",
    element:<Test/>,
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
