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

const initialState = {
  refreshToken: localStorage.getItem('refreshToken'),
  accessToken: localStorage.getItem('accessToken'),
  error: {},
  isAuth: false,
  isLoading: false,
  userInfo: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_SIGNIN_REQUEST:
    case USER_LOADING_REQUEST:
      return { ...state, isLoading: true }
    case USER_LOADING_SUCCESS:
      localStorage.setItem('refreshToken', action.payload.refresh)
      localStorage.setItem('accessToken', action.payload.access)
      return {
        ...state,
        refreshToken: action.payload.refresh,
        accessToken: action.payload.access,
        isAuth: true,
        isLoading: false,
        userInfo: action.payload,
        error: null,
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: false,
        isLoading: false,
        error: null,
      }
    case USER_SIGNIN_SUCCESS:
      localStorage.setItem('refreshToken', action.payload.tokens.refresh)
      localStorage.setItem('accessToken', action.payload.tokens.access)
      // document.location.href = '/';
      return {
        ...state,
        refreshToken: action.payload.tokens.refresh,
        accessToken: action.payload.tokens.access,
        isAuth: true,
        isLoading: false,
        error: null,
      }
    case USER_SIGNIN_FAIL:
    case USER_REGISTER_FAIL:
    case USER_LOADING_FAIL:
      // localStorage.removeItem('refreshToken');
      // localStorage.removeItem('accessToken');
      // return {
      //   ...state,
      //   refreshToken: null,
      //   accessToken: null,
      //   userInfo: {},
      //   isAuth: false,
      //   isLoading: false,
      //   error: action.payload,
      // };
      return state
    case USER_LOGOUT:
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('accessToken')
      return {
        ...state,
        refreshToken: null,
        accessToken: null,
        isLoading: false,
        error: null,
      }
    default:
      return state
  }
}
