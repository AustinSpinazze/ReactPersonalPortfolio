import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./common/Footer";
import Navbar from "./common/NavBar";
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