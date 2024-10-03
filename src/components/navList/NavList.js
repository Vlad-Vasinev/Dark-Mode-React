
import React from "react";
import { Link } from "react-router-dom";

import classes from './navList.module.css';

import { useSelector } from "react-redux";

const NavList = () => {

    const backgroundNav = useSelector(state => state.theme.themeBackgroundNav);

    return (
        <ul className={classes.navList} >
            <li className={classes.navItem}>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/"> HomePage </Link>
            </li>
            <li className={classes.navItem}>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/Products" > Characters </Link>
            </li>
            <li className={classes.navItem}>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/Breeds"> List/Upload </Link>
            </li>
            <li className={classes.navItem}>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/MapsPage"> Maps </Link>
            </li>
        </ul>
    )
}

export default NavList;