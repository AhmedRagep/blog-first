import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry This Page Not Found</h1>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1>Sorry This Page Not Found</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1>Sorry This Page Not Found</h1>,
  },
  {
    path: "/javascript",
    element: <Javascript />,
    errorElement: <h1>Sorry This Page Not Found</h1>,
  },
]);
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
