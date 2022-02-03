import React from "react";
import './App.css';
import {Home} from "./pages";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthorsPage} from "./pages/AuthorsPage";



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/authors' element={<AuthorsPage />} exact />
        </Routes>
    </Router>
  );
}

export default App;
