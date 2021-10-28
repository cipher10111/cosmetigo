import Axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL,
  USER_LOGOUT,
} from '../constants/userActionTypes'

export const fetchUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING_REQUEST })
  const token = getState().auth.token
  Axios.get('/api/auth/user', {
    headers: { Authorization: `Token ${token}` },
  })
    .then((res) => {
      dispatch({ type: USER_LOADING_SUCCESS, payload: res.data })
    })
    .catch((error) => {
      dispatch({ type: USER_LOADING_FAIL })
    })
}

export const register = (userInfo) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: userInfo })
  try {
    const { data } = await Axios.post('/api/auth/register', userInfo)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    })
  }
}

export const signin = (userInfo) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST })
  try {
    const { data } = await Axios.post('/api/auth/login', userInfo)
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    })
  }
}

export const logout = () => async (dispatch, getState) => {
  const token = getState().auth.token || null
  Axios.post('/api/auth/logout', null, {
    headers: { Authorization: `Token ${token}` },
  })
    .then((res) => {
      dispatch({ type: USER_LOGOUT })
    })
    .catch((error) => {
      // dispatch({
      // 	type: USER_LOGOUT_FAIL,
      // 	payload:
      // 		error.reponse && error.reponse.data.message
      // ? error.reponse.data.message
      // 			: error.message,
      // });
    })
  document.location.href = '/auth'
}
