import React from "react";
import { useSelector} from "react-redux";
import classes from './modal.module.css'

const Modal = () => {

  const state = useSelector(state => state.modal.modalState)
  //console.log(state)

  if(state === true) {
    console.log('state is true')
    const pagePosition = window.scrollY
    const paddingOffset = window.innerWidth - document.body.offsetWidth
    document.body.style.paddingRight = paddingOffset + 'px'
    document.body.classList.add('dis-scroll')
    document.body.dataset.position = pagePosition
    document.body.style.top = `-${pagePosition}px`
  }
  else {
    document.querySelector('body').classList.remove('dis-scroll')
    console.log('state is false')
    document.body.style.top = 'auto'
    const pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.classList.remove('dis-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    })
  }

  return (
    <div className={ state ? [ classes["modal-background"], classes["modal-opened"] ].join(" ") : "modal-background" }>

    </div>
  )
}

export default Modal