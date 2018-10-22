import {SubmissionError} from 'redux-form';
import {API_URI} from '../../config.js';

const userToken = localStorage.getItem('authToken');

export const POST_LOG_REQUEST = 'POST_LOG_REQUEST';
export const postLogRequest = () => ({
  type: POST_LOG_REQUEST
})

export const POST_LOG_SUCCESS = 'POST_LOG_SUCCESS';
export const postLogSuccess = () => ({
  type: POST_LOG_SUCCESS
})

export const POST_LOG_FAILURE = 'POST_LOG_FAILURE';
export const postLogFailure = () => ({
  type: POST_LOG_FAILURE
})

export const FETCH_LOG_REQUEST = 'FETCH_LOG_REQUEST';
export const fetchLogRequest = () => ({
  type: FETCH_LOG_REQUEST
})

export const FETCH_LOG_SUCCESS = 'FETCH_LOG_SUCCESS';
export const fetchLogSuccess = (logs) => ({
  type: FETCH_LOG_SUCCESS,
  logs
})

export const FETCH_LOG_FAILURE = 'FETCH_LOG_FAILURE';
export const fetchLogFailure = () => ({
  type: FETCH_LOG_FAILURE
})

export const FETCH_LOGID_REQUEST = 'FETCH_LOGID_REQUEST';
export const fetchLogIdRequest = () => ({
  type: FETCH_LOGID_REQUEST
})

export const FETCH_LOGID_SUCCESS = 'FETCH_LOGID_SUCCESS';
export const fetchLogIdSuccess = (log) => ({
  type: FETCH_LOGID_SUCCESS,
  log
})

export const FETCH_LOGID_FAILURE = 'FETCH_LOGID_FAILURE';
export const fetchLogIdFailure = () => ({
  type: FETCH_LOGID_FAILURE
})

export const PATCH_LOG_REQUEST = 'PATCH_LOG_REQUEST';
export const patchLogRequest = () => ({
  type: PATCH_LOG_REQUEST
})

export const PATCH_LOG_SUCCESS = 'PATCH_LOG_SUCCESS';
export const patchLogSuccess = () => ({
  type: PATCH_LOG_SUCCESS
})

export const PATCH_LOG_FAILURE = 'PATCH_LOG_FAILURE';
export const patchLogFailure = () => ({
  type: PATCH_LOG_FAILURE
})

export const DELETE_LOG_REQUEST = 'DELETE_LOG_REQUEST';
export const deleteLogRequest = () => ({
  type: DELETE_LOG_REQUEST
})

export const DELETE_LOG_SUCCESS = 'DELETE_LOG_SUCCESS';
export const deleteLogSuccess = (id) => ({
  type: DELETE_LOG_SUCCESS,
  id
})

export const DELETE_LOG_FAILURE = 'DELETE_LOG_FAILURE';
export const deleteLogFailure = () => ({
  type: DELETE_LOG_FAILURE
})


//create
export const postWorkout = values => dispatch => {
  dispatch(postLogRequest());
  console.log(API_URI)
  return fetch(`${API_URI}/logs`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
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
  .then(dispatch(getWorkouts()))
  .catch(error => Promise.reject(
        new SubmissionError({
          [error.location]: error.message
      })
    )
  )
}

// get
export const getWorkouts = logs => dispatch => {
  dispatch(fetchLogRequest(logs));
  console.log('retrieving logs');

  return fetch(`${API_URI}/logs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject({
        message: res.statusText,
        code: res.status
      })
    }
    return res.json()
  })
  .then(logs => {
    return dispatch(fetchLogSuccess(logs));
  })
  .then(logs => console.log('Logs Retrieved', logs))
  .catch(err => Promise.reject(
    new SubmissionError({
      [err.location]: err.message
    })
  ))
}

//getid
export const getWorkoutId = id => dispatch => {
  dispatch(fetchLogIdRequest(id));
  console.log('retrieving log');

  return fetch(`${API_URI}/logs/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject({
        message: res.statusText,
        code: res.status
      })
    }
    return res.json()
  })
  .then(log => {
    return dispatch(fetchLogIdSuccess(log));
  })
  .then(log => console.log('Logs Retrieved', log))
  .catch(err => Promise.reject(
    new SubmissionError({
      [err.location]: err.message
    })
  ))
}

//update
export const updateWorkout = (values, id) => dispatch => {
  dispatch(patchLogRequest());
  console.log(API_URI)
  return fetch(`${API_URI}/logs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
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
  .then(log => {
    dispatch(patchLogSuccess());
    console.log('Log updated', log);
  })
  .then(dispatch(getWorkouts()))
  .catch(error => Promise.reject(
        new SubmissionError({
          [error.location]: error.message
      })
    )
  )
}

//delete
export const deleteWorkout = id => dispatch => {
  dispatch(deleteLogRequest(id));
  console.log('deleting log: ', id);

  return fetch(`${API_URI}/logs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(res => {
    console.log(res);
    if(!res.ok) {
      return Promise.reject({
        message: res.statusText,
        code: res.status
      })
    }
    dispatch(deleteLogSuccess(id));
  })
  .then(() => console.log('Log Deleted'))
  .catch(err => Promise.reject(
    new SubmissionError({
      [err.location]: err.message
    })
  ))
}