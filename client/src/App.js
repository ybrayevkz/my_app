import React from "react";
import './App.css';
import {Home} from "./pages";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage";



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/signin' element={<AuthPage />} exact />
        </Routes>
    </Router>
  );
}

export default App;
