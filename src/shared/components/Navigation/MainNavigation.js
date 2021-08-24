import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = props => {
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawerHandler = () => {
    setShowDrawer(prevState => !prevState);
  };
  const closeDrawerHandler = () => {
    setShowDrawer(false);
  };
  return (
    <>
      {showDrawer && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={showDrawer} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
          {/* mirar de hacer un hamburguer button dinámico que se convierta en cruz */}
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
