import Axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL
} from "../constants/userActionTypes";

export const checkAuth = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING_REQUEST });
  const { refreshToken } = getState().auth;
  Axios.post("/api/auth/token/refresh", { refresh: refreshToken })
    .then((res) => {
      dispatch({ type: USER_LOADING_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: USER_LOADING_FAIL });
    });
};

export const register = (userInfo) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: userInfo });
  try {
    const { data } = await Axios.post("/api/auth/register", userInfo);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data ? error.response.data : error.message
    });
  }
};

export const signin = (userInfo) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await Axios.post("/api/auth/login", userInfo);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data ? error.response.data : error.message
    });
  }
};
