
import React from "react";

import classes from './votingBlock.module.css';

import ReactionBlock from "../reactionBlock/ReactionBlock";
import ConsoleList from "../consoleList/ConsoleList";

const ProductsBlock = () => {
  return (
    <div className= { classes.blockInner }>
      <ReactionBlock></ReactionBlock>
      <ConsoleList></ConsoleList>
    </div>
  )
}

export default ProductsBlock;