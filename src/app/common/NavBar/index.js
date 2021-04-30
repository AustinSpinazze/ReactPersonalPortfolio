import React from "react";
import { toggleMenu, closeMenu } from "../../redux/Main/main.actions";
import { connect } from "react-redux";

import NavBar from "./NavBar";

const index = (props) => {
  return (
    <NavBar
      toggle={props.toggle}
      toggleMenu={props.toggleMenu}
      closeMenu={props.closeMenu}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    toggle: state.main.toggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
    closeMenu: () => dispatch(closeMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
