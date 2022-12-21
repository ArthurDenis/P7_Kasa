import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Routes, Router, Route} from 'react-router-dom'
import Main from './pages/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" component={Main} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
