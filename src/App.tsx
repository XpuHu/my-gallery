import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path='/' element={<Gallery />} >
                        <Route path='photo/:id' />
                    </Route>
                    <Route path='/about' element={<AboutMe />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
