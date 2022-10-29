import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Toast } from "./components/Atoms/Toast/Toast";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Globals } from "./styles/Globals";

const router = createBrowserRouter(createRoutesFromElements(
  <React.Fragment>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </React.Fragment>
));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <Globals/>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
    <Toast/>
  </React.Fragment>
);
