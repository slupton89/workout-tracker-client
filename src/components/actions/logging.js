import {SubmissionError} from 'redux-form';
import store from '../../store';

export const FETCH_LOG_REQUEST = 'FETCH_LOG_REQUEST';
export const fetchLogRequest = () => ({
  type: FETCH_LOG_REQUEST
})

export const FETCH_LOG_SUCCESS = 'FETCH_LOG_SUCCESS';
export const fetchLogSuccess = () => ({
  type: FETCH_LOG_SUCCESS
})

export const FETCH_LOG_FAILURE = 'FETCH_LOG_FAILURE';
export const fetchLogFailure = () => ({
  type: FETCH_LOG_FAILURE
})

export const postWorkout = values => dispatch => {
  dispatch(fetchLogRequest());

  return fetch('http://localhost:8080/api/logs', {
    method: 'POST',
    body: JSON.stringify(Object.assign({}, values, { user: store.getState().auth.user })),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject({
        message: res.statusText,
        code: res.status
      });
    }
    return res.json();
  })
  .then(log => { console.log('Log submitted', log); })
  .catch(error => Promise.reject(
        new SubmissionError({
          [error.location]: error.message
      })
    )
  )
}