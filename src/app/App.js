import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import { initialLoad } from "./redux/Main/main.actions";
import Loader from "./common/Loaders";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/NavBar";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    setTimeout(props.initialLoad, 2500);
  }, []);

  return (
    <BrowserRouter>
      {props.firstLoad ? (
        <div className="loader">
          <Loader loader={"main"} />
        </div>
      ) : (
        <Fragment>
          <Navbar />
          <div className="body-container" onWheel={() => {props.closeMenu}}>
            <Route path="/" component={LandingPage} exact />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </div>
          <Footer />
        </Fragment>
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    firstLoad: state.main.firstLoad,
    toggle: state.main.toggle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialLoad: () => dispatch(initialLoad()),
    closeMenu: () => dispatch(closeMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
