import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';

export const SET_AUTH = 'SET_AUTH';
export const setAuth = authToken => ({
  type: SET_AUTH,
  authToken
})

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const cleatAuth = () => ({
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

const storeAuthToken = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuth(authToken));
  dispatch(fetchAuthSuccess(decodedToken.user));
  localStorage.setItem('authToken', authToken);
  console.log(decodedToken);
}

export const login = values => dispatch =>  {
  dispatch(fetchAuthRequest());
  return fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    console.log('res', (res));
    if (!res.ok) {
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res.json();
  })
  .then(({authToken}) =>
    storeAuthToken(authToken, dispatch)
  )
  .then(() => { })
  .catch(error =>
      Promise.reject(
          new SubmissionError({
              [error.location]: error.message
          })
      )
  );
}