import React from 'react';
import './App.css';
import Loginout from "./components/Loginout/Loginout";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header />
                <Loginout />

            </div>
        </BrowserRouter>
    )

};

export default App;