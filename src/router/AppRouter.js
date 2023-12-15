import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Assessment from '../Pages/Assessment';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assessment" element={<Assessment />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
