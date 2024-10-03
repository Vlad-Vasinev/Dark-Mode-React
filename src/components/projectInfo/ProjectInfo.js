import React from "react";

import { useSelector } from 'react-redux';

import classes from './projectInfo.module.css';

const ProjectInfo = () => {

  const primaryColor = useSelector(state => state.theme.themeColorPrimary);

  return (
    <div className={classes.projectInfoWrapper} style={{ color: primaryColor }}>
      <h2 style={{ color: primaryColor }}>This is DarkMode React Project</h2>
      <h3 style={{ color: primaryColor }}>This project was made to demonstrate:</h3>
      <ul className={classes.projectUl}>
        <li style={{ color: primaryColor }}>load a content on a webpage</li>
        <li style={{ color: primaryColor }}>adding element to page</li>
        <li style={{ color: primaryColor }}>searching an element on a page</li>
        <li style={{ color: primaryColor }}>deleting element from page</li>
        <li style={{ color: primaryColor }}>basic interaction with popular maps like Leaflet and MapBox</li>
      </ul>
      <h3 style={{ color: primaryColor }}>This project is using:</h3>
      <ul className={classes.projectUl}>
        <li style={{ color: primaryColor }}>uuid: for creating unique element's id</li>
        <li style={{ color: primaryColor }}>redux: for storing elements </li>
        <li style={{ color: primaryColor }}>api: <a style={{ color: primaryColor }} href="https://rickandmortyapi.com/" target="_blank">https://rickandmortyapi.com/</a></li>
        <li style={{ color: primaryColor }}>mapbox: <a style={{ color: primaryColor }} href="https://www.mapbox.com/" target="_blank">https://www.mapbox.com/</a></li>
        <li style={{ color: primaryColor }}>leafletjs: <a style={{ color: primaryColor }} href="https://leafletjs.com/" target="_blank">https://leafletjs.com/</a></li>
      </ul>
    </div>
  )
}

export default ProjectInfo