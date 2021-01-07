import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./common/Footer";
import Navbar from "./common/NavBar";
import Home from "./Home";
import Projects from "./Projects";
import './scss/main.scss';
// import './scss/pages/_app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bodyContainer">
        <Route path="/" component={Home} exact={true} />
        <Route path="/projects" component={Projects}/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;