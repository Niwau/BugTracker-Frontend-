import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Globals } from "./styles/Globals";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>}/>
  </>
));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Globals/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
