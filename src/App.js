import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Userlist from "./pages/userlist";
import Home from "./pages/home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; 

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
       {/* Home route */}
       <Route path="/" element={<Home />} />
        <Route path="/user/:id" component={Userlist} />
        </Routes>
    </Router>

  );
};


export default App;
