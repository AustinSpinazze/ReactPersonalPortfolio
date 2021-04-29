import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { initialLoad } from "./redux/Home/home.actions";
import Loader from "./common/Loaders";
import Footer from "./common/Footer";
import Navbar from "./common/NavBar";
import Home from "./Home";
import Projects from "./Projects";
import "./App.css";

const App = (props) => {
  console.log(props.firstLoad);

  useEffect(() => {
    setTimeout(props.initialLoad, 2500);
  }, []);

  return (
    <BrowserRouter>
      {props.firstLoad ? (
        <div className="loader">
          <Loader loader={"main"}/>
        </div>
      ) : (
        <Fragment>
          <Navbar />
          <div className="body-container">
            <Route path="/" component={Home} exact={true} />
            <Route path="/projects" component={Projects} />
          </div>
          <Footer />
        </Fragment>
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    firstLoad: state.home.firstLoad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialLoad: () => dispatch(initialLoad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
