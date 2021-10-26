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
} from "../constants/userActionTypes";

const initialState = {
	token: localStorage.getItem("token"),
	error: {},
	isAuth: false,
	isLoading: false,
	userInfo: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
		case USER_SIGNIN_REQUEST:
		case USER_LOADING_REQUEST:
			return { ...state, isLoading: true };
		case USER_LOADING_SUCCESS:
			return {
				...state,
				isAuth: true,
				isLoading: false,
				userInfo: action.payload,
				error: null,
			};
		case USER_REGISTER_SUCCESS:
		case USER_SIGNIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			document.location.href = "/";
			return {
				...state,
				...action.payload,
				isAuth: true,
				isLoading: false,
				error: null,
			};
		case USER_LOADING_FAIL:
		case USER_SIGNIN_FAIL:
		case USER_REGISTER_FAIL:
		case USER_LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				userInfo: {},
				isAuth: false,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
