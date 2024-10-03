
import React from "react";

import classes from '../likesPage/likesPage.module.css';

import SearchBar from "../searchBar/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import BlockMenu from "../blockMenu/BlockMenu";

import { favourStorageDelete } from "../../store/favouriteReducer";

const FavouritePage = () => {

  const dispatch = useDispatch();

  const stateFavour = useSelector(state => state.favour.favouriteState);
  const favourLikes = useSelector(state => state.favour.favouriteLikes);

  const primaryColor = useSelector(state => state.theme.themeColorPrimary);

  const bgDark = useSelector(state => state.theme.customBg);

  function delItemFunc(elId) {
    dispatch(favourStorageDelete(elId));
  }

  return (
    <div className={classes.reactionInner}>
      <BlockMenu></BlockMenu>
      <div className={classes.reactionSecondary}>
        <div className={classes.blockLikes}>
            <SearchBar></SearchBar>
            <div className={classes.likesBlock} style={{ backgroundColor: bgDark }}>
              {
                stateFavour ?
                  favourLikes.map(el =>
                    <div
                      className={classes.likesItem}
                      key={uuidv4()}>
                      <button
                        onClick={() => delItemFunc(el.id)}
                        className={classes.delItem}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z" fill="white" />
                        </svg>
                      </button>
                      <img src={el.image} alt={el.name}></img>
                      <div style={{ color: primaryColor }}> {el.name} </div>
                    </div>
                  )
                :
                  <div style={{ color: primaryColor }}> you have nothing in favour section </div>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FavouritePage;