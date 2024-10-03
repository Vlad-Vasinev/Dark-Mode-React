import React, { useState } from "react";
import './modal-order.css'

import classes from '../customLoad/customLoad.module.css';

import { v4 as uuidv4 } from 'uuid';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../store/modalReducer";
import { newApiDataCreator } from "../../store/dataReducer";

const ModalOrder = () => {

  const [colorBorder, setColorBorder] = useState(false);

  const dispatch = useDispatch()
  function modalOrderClose () {
    dispatch(changeModalState())
  }

  const state = useSelector(state => state.modal.modalState)

  function dragEnterFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    setColorBorder(true);
  }
  function dragLeaveFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    setColorBorder(false);
  }
  function dragOverFunc(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function dragDropFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    getFileURLDrop(e.dataTransfer.files)
  }

  const getFileURLDrop = async (event) => {
    for (let item of Array.from(event)) {
      let file = item
      let url = await readFileAsURL(file)

      let webResult = prompt("Please enter the character's name");
      let newArr = { name: webResult, id: uuidv4(), image: url };
      dispatch(newApiDataCreator(newArr));
    }
    modalOrderClose()
  }
  const readFileAsURL = (myFile) => {
    return new Promise((res, rej) => {
      let myReader = new FileReader()
      myReader.onload = (e) => res(e.target.result)
      myReader.onerror = (e) => rej(e)
      myReader.readAsDataURL(myFile)
    })
  }
  const getFileURLClick = async (event) => {
    for (let item of Array.from(event.target.files)) {
      let file = item
      let url = await readFileAsURL(file)

      let webResult = prompt("Please enter the character's name");
      let newArr = { name: webResult, id: uuidv4(), image: url };
      dispatch(newApiDataCreator(newArr));
    }
    modalOrderClose()
  }

  return (
    <div className={ state ? [ ["modal"], ["modal-order"], ["opened"] ].join(" ") : [ ["modal"], ["modal-order"] ].join(" ") }>
      <div class="modal__inner">
        <div class="form-order">
          <div class="modal__top">
            <div class="modal__close-button" onClick={modalOrderClose} js-modal-close>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                <path fill="#0E0E0E" d="m5.39 25.2 19.8-19.8 1.41 1.4L6.8 26.6z"></path>
                <path fill="#0E0E0E" d="m6.81 5.4 19.8 19.8-1.41 1.4L5.4 6.8z"></path>
              </svg>
            </div>
          </div>
          <hr class="form-order-hr"/>
          <div class="modal__body">
            <div className={classes.loadWrapper}>
              <h2 className={classes.loadTitle}>
                Upload .jpg or .png file
              </h2>
              <div
                className={classes.loadDragArea}
                onDragOver={dragOverFunc}
                onDrop={dragDropFunc}
                onDragLeave={dragLeaveFunc}
                onDragEnter={dragEnterFunc}
                style={{ border: colorBorder ? "2px dashed #7A00FC" : "2px dashed #FBE0DC" }}>
                <div
                  // onDragLeave={dragLeaveFunc}
                  onDragEnter={dragEnterFunc}
                  className={classes.loadDragInner}>
                  <span onDragEnter={dragEnterFunc}> Drag </span> here your img or
                  <label
                    onDragEnter={dragEnterFunc}
                    className={classes.loadImagesLabel}>
                    Click here to upload
                    <input
                      onChange={getFileURLClick}
                      placeholder="click here to load image only!"
                      accept=".png, .jpg,"
                      className={classes.loadImagesInput}
                      multiple type="file" name="file[]" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOrder