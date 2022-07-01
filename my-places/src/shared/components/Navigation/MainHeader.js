import React from "react";
import './MainHeader.css';
import { Link } from "react-router-dom";
import './MainNavigation.css';
const MainHeader= props => {
    return (
        <header className="main-header">
            <button className="main-navigation__menu-btn">
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">My Places</Link>
            </h1>
            <nav>...</nav>
        </header>
    );
};

export default MainHeader;