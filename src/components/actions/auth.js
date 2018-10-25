import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../../local-storage';
import {API_URI} from '../../config';

export const SET_AUTH = 'SET_AUTH';
export const setAuth = authToken => ({
  type: SET_AUTH,
  authToken
})


export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
})

export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST
})

export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const fetchAuthSuccess = user => ({
  type: FETCH_AUTH_SUCCESS,
  user
})

export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const fetchAuthFailure = () => ({
  type: FETCH_AUTH_FAILURE
})

export const storeAuthToken = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuth(authToken));
  dispatch(fetchAuthSuccess(decodedToken.user));
  saveAuthToken(authToken);
}

export const login = values => dispatch =>  {
  dispatch(fetchAuthRequest());
  return fetch(`${API_URI}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res.json();
  })
  .then(({authToken}) => {
    storeAuthToken(authToken, dispatch);
  })
  .catch(error => {
      console.log(error)
      Promise.reject(
          new SubmissionError({
              [error.location]: error.message
          })
      )
        }
  );
}

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(fetchAuthRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_URI}/auth/refresh`, {
      method: 'POST',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => storeAuthToken(authToken, dispatch))
      .catch(err => {
          // We couldn't get a refresh token because our current credentials
          // are invalid or expired, or something else went wrong, so clear
          // them and sign us out
          dispatch(fetchAuthFailure(err));
          dispatch(clearAuth());
          clearAuthToken(authToken);
      });
};

export const logoutAuth = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(clearAuth());
  clearAuthToken(authToken);
}