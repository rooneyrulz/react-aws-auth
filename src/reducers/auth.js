import {
  SET_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAIL,
  SIGN_OUT,
} from '../actions/types';

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        loading: false,
        isSignedUp: false,
        isAuthenticated: true,
        user: payload,
        errors: null,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedUp: true,
        isAuthenticated: false,
        errors: null,
      };

    case SIGN_IN_SUCCESS:
    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedUp: false,
        isAuthenticated: true,
        user: payload,
        errors: null,
      };

    case AUTH_ERROR:
    case SIGN_UP_FAIL:
    case SIGN_IN_FAIL:
    case CONFIRM_EMAIL_FAIL:
    case SIGN_OUT:
      return {
        ...state,
        loading: false,
        isSignedUp: false,
        isAuthenticated: false,
        user: {},
        errors: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
