
const myStore = {
  modalState: false,
}

const MODAL_STATE = "MODAL_STATE"
const MODAL_ORDER_STATE = "MODAL_ORDER_STATE"

export const modalReducer = (state = myStore, action) => {
  switch (action.type) {
    case MODAL_STATE:
      console.log(state)
      return {
        ...state, modalState: !state.modalState
      }
    default:
      return state
  }
}

export const changeModalState = (payload) => {
  return {type: "MODAL_STATE", payload}
}