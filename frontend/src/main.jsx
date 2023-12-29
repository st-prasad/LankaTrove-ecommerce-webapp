import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index={true} element={<Homescreen/>} /> 
    {/* rendering Homescreen only when "/" path is matched */}
    <Route path="/product/:id" element={<Productscreen />} />
  </Route>)

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
