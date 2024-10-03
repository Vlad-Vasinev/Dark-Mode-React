import React, { useEffect, useState } from "react";

import classes from './votingPage.module.css';

import BlockMenu from "../blockMenu/BlockMenu";
import SearchBar from "../searchBar/SearchBar";
import VotingBlock from "../votingBlock/VotingBlock";

import { useSelector } from 'react-redux';

const Products = () => {

  const bgDark = useSelector(state => state.theme.customBg);

  return (
    <div>
      <BlockMenu></BlockMenu>
      <div className={classes.votingInner}>
        <div className={classes.votingSecondary}>
          <SearchBar></SearchBar>
          <div className={classes.votingSecondaryMain} style={{ backgroundColor: bgDark }}>
            <VotingBlock></VotingBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;