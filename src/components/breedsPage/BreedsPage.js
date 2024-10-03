import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './breedsPage.module.css';

import { v4 as uuidv4 } from 'uuid';
import { newApiDataCreator } from "../../store/dataReducer";
import { counterCreator } from "../../store/breedsReducer";

import { themeDarkCreator } from "../../store/themeReducer";
import { themeLightCreator } from "../../store/themeReducer";
import { changeModalState } from "../../store/modalReducer";

import BlockMenu from "../blockMenu/BlockMenu";

import TextFiller from "../textFiller/TextFiller";

// for production

const Breeds = () => {

  const counterState = useSelector(state => state.breeds.counter);
  const newApiData = useSelector(state => state.data.apiDataNew);
  const primaryColor = useSelector(state => state.theme.themeColorPrimary);
  const themeAct = useSelector(state => state.theme.themeActive);

  const dispatch = useDispatch();
  const [character, setCharacter] = useState(false);

  const refButtonLoad = React.useRef();
  const [customCharacter, setCustomCharacter] = useState("-40%");

  if (themeAct === true) {
    dispatch(themeDarkCreator());
  }
  else {
    dispatch(themeLightCreator());
  }

  function useLoadData() {
    dispatch(counterCreator(1));
    fetch(`https://rickandmortyapi.com/api/character/?page=${counterState}`)
      .then(res => res.json())
      .then(data => {
          data.results.forEach(element => {
            dispatch(newApiDataCreator(element));
          });
      })
  }

  function modalOrdFunc () {
    dispatch(changeModalState())
  }

  return (
    <div className={classes.breedsPageWrapper} style={{ color: primaryColor }}>
      <BlockMenu></BlockMenu>
      <TextFiller></TextFiller>
      <div className={classes.breedsList}>
        {
          newApiData.map(elData =>
            <div
              className={classes.breedsItem}
              key={uuidv4()}>
              <div>
                <img src={elData.image} />
              </div>
              <div style={{ color: primaryColor }}> {elData.name} </div>
            </div>
          )
        }
      </div>

      <div className={classes.loadBtnWrapper}>
        <button onClick={useLoadData} className={classes.loadMore} > load more </button>
        <button ref={refButtonLoad} onClick={modalOrdFunc} className={classes.loadCustom} >
          load your own character
        </button>
      </div>
      <TextFiller></TextFiller>
      <TextFiller></TextFiller>
    </div>
  )
}

export default Breeds;
