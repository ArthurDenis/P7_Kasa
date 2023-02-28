/* Ici nous importons le router qui est donc basé à la racine de notre App.js et englobe donc les routes qu'il contient*/
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as  Router } from 'react-router-dom'
import App from "./app.js";
import './styles/index.css'

const root_container = document.getElementById("root");
const root = createRoot(root_container);

root.render(
    <Router>
      <App />
    </Router>
);
