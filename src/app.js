import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Apropos from './pages/Apropos.jsx'
import Error from './pages/Error.jsx'
import Logement from './pages/Logement.jsx'

const App = () => {
    return (
    <div className="App">
        <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/a_propos" element={<Apropos />} />
                <Route path ="/logement" element={Logement} />
                <Route path ="/error" element={Error} />   
            </Routes>
        <Footer />
    </div>
    );
};

export default App;