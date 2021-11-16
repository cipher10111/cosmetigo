import {
  LOAD_NEW_PRODUCT_REQUEST,
  LOAD_NEW_PRODUCT_SUCCESS,
  LOAD_NEW_PRODUCT_FAIL,
} from '../constants/productActionTypes'

const initialState = {
  newProducts: [],
  error: null,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEW_PRODUCT_REQUEST:
      return { ...state, isLoading: true }
    case LOAD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        newProducts: action.payload.data,
        isLoading: false,
        error: null,
      }
    case LOAD_NEW_PRODUCT_FAIL:
      return {
        ...state,
        newProducts: [],
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
