import React from 'react';

import classes from './homePage.module.css';

import BlockMenu from '../blockMenu/BlockMenu';
import TextFiller from '../textFiller/TextFiller';
import ProjectInfo from '../projectInfo/ProjectInfo';

const HomePage = () => {

  return (
    <div className={classes.home}>
      <div className='container'>
          <BlockMenu></BlockMenu>
          <ProjectInfo></ProjectInfo>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
          <TextFiller></TextFiller>
      </div>
    </div>
  )
};

export default HomePage;