import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, OurCoffeePage, SingleCoffee, ForYourPleasure} from '../pages';
import './App.scss';

function App() {

    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/> 
                    <Route path='/ourcoffee' element={<OurCoffeePage/>}/>
                    <Route path='/ourcoffee/:id' element={<SingleCoffee/>}/>
                    <Route path='/yourepleasure' element={<ForYourPleasure/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
