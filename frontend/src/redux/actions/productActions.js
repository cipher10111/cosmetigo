/* eslint-disable import/prefer-default-export */
import Axios from "axios";
import {
  LOAD_NEW_PRODUCT_REQUEST,
  LOAD_NEW_PRODUCT_SUCCESS,
  LOAD_NEW_PRODUCT_FAIL
} from "../constants/productActionTypes";

export const fetchNewProduct = (count) => async (dispatch) => {
  dispatch({ type: LOAD_NEW_PRODUCT_REQUEST, payload: count });
  try {
    const { data } = await Axios.get(`/api/products/product/new/${count}`);
    dispatch({ type: LOAD_NEW_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: LOAD_NEW_PRODUCT_FAIL,
      payload: error.response && error.response.data ? error.response.data : error.message
    });
  }
};
