import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { AuthProviderAdm } from "./contexts/CrudUsers/AuthProviderAdm";
import './AppStyle.css'


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <AuthProvider>
      <AuthProviderAdm>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProviderAdm>
    </AuthProvider>
  </React.StrictMode>
);
