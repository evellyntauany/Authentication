import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { AuthProviderAdm } from "./contexts/CrudUsers/AuthProviderAdm";
import './AppStyle.scss'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo&family=Dosis:wght@300;500;600&family=Fira+Sans+Condensed:wght@300&family=Montserrat+Alternates&family=Quicksand&family=Roboto&display=swap');
</style>


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
