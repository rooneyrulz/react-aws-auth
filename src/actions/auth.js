import { Auth } from 'aws-amplify';
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

//   GET AUTH USER
export const loadUser = async (dispatch) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    dispatch({ type: USER_LOADED, payload: user });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: { msg: error.message } });
  }
};

// SIGN UP
export const signUp = async (data, dispatch) => {
  try {
    await Auth.signUp(data);
    dispatch({ type: SIGN_UP_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAIL, payload: { msg: error.message } });
  }
};

// CONFIRM SIGN UP / CONFIRM EMAIL
export const confirmSignUp = async (data, dispatch, history) => {
  const { username, code } = data;
  try {
    await Auth.confirmSignUp(username, code);
    dispatch({ type: CONFIRM_EMAIL_SUCCESS });
    history.push('/sign-in');
  } catch (error) {
    dispatch({ type: CONFIRM_EMAIL_FAIL, payload: { msg: error.message } });
  }
};

// SIGN IN
export const signIn = async (data, dispatch) => {
  const { username, password } = data;
  try {
    await Auth.signIn(username, password);
    dispatch({ type: SIGN_IN_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGN_IN_FAIL, payload: { msg: error.message } });
  }
};

// SIGN OUT
export const signOut = async (dispatch) => {
  try {
    await Auth.signOut();
    dispatch({ type: SIGN_OUT });
  } catch (error) {}
};
