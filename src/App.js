import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsersContainerComponent from './components/UsersContainerComponent'
import DetailsComponent from './components/DetailsComponent';


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<UsersContainerComponent />} />
      <Route path="/:login/details" element={<DetailsComponent />} />
    </Routes>
  </Router>
}

export default App;
