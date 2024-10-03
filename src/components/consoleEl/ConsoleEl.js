import React from "react";

import classes from './consoleEl.module.css';

import { useSelector } from "react-redux";

const ConsoleEl = (props) => {

  const consoleState = useSelector(state => state.console.consoleState);

  console.log(props.id);

  let data = new Date();
  let currentData = data.getHours() + ":" + data.getMinutes();
  console.log(data.getHours() + ":" + data.getMinutes());

  return (
    <li className={classes.consoleListEl}>
      <div className={classes.consoleListTime}>
        {currentData}
      </div>
      <div className={classes.consoleListId}>
        Image Id: <span> {props.id} </span> was added to  {consoleState}
      </div>
    </li>
  )
}

export default ConsoleEl;