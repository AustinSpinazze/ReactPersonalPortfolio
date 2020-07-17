import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./layout/Footer";
import Navbar from "./layout/NavBar";
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bodyContainer">
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;