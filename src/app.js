/* On importe React ainsi que les pages et les components Header et Footer communs à ces pages.
Routes et Route sont importés pour avoir une application en Single Page */
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Main from './pages/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Apropos from './pages/Apropos.jsx'
import Error from './pages/Error.jsx'
import Logement from './pages/Logement.jsx'

const App = () => {
    return (
    <div className='App'>
        <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/a_propos" element={<Apropos />} />
                <Route path ="/Logement/:id" element={<Logement />} />
                <Route path ="*" element={<Error />} />
            </Routes>
        <Footer />
    </div>
    );
};

export default App;