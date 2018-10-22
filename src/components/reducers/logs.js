import {
  POST_LOG_REQUEST,
  POST_LOG_SUCCESS,
  POST_LOG_FAILURE,
  FETCH_LOG_REQUEST,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_FAILURE,
  FETCH_LOGID_REQUEST,
  FETCH_LOGID_SUCCESS,
  FETCH_LOGID_FAILURE,
  PATCH_LOG_REQUEST,
  PATCH_LOG_SUCCESS,
  PATCH_LOG_FAILURE,
  DELETE_LOG_REQUEST,
  DELETE_LOG_SUCCESS,
  DELETE_LOG_FAILURE,

} from '../actions/logs';

const initialState = {
  logs: [],
  currentLog: null,
  loading: false,
  error: null
}

export const logReducer = (state=initialState, action) => {
  if (action.type === POST_LOG_REQUEST) {
    // console.log('post', action.auth);
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === POST_LOG_SUCCESS) {
    //  console.log('success action', action.user)
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  } else if (action.type === POST_LOG_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_LOG_REQUEST) {
    // console.log('fetch', action.auth);
    return Object.assign({}, state, {
      loading: true,
      currentLog: action.currentLog
    })
  } else if (action.type === FETCH_LOG_SUCCESS) {
    //  console.log('success action', action.logs)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      logs: action.logs
    })
  } else if (action.type === FETCH_LOG_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_LOGID_REQUEST) {
    // console.log('fetch', action.auth);
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_LOGID_SUCCESS) {
    //  console.log('success action', action.logs)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      currentLog: action.log
    })
  } else if (action.type === FETCH_LOGID_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === PATCH_LOG_REQUEST) {
    // console.log('patch', action.auth);
    return Object.assign({}, state, {
      loading: true,
      currentLog: action.currentLog
    })
  } else if (action.type === PATCH_LOG_SUCCESS) {
    //  console.log('success action', action.logs)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      logs: action.logs
    })
  } else if (action.type === PATCH_LOG_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === DELETE_LOG_REQUEST) {
    // console.log('delete', action.auth);
    return Object.assign({}, state, {
      loading: true,
      currentLog: action.currentLog
    })
  } else if (action.type === DELETE_LOG_SUCCESS) {
     console.log('success action', state)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      logs: state.logs.filter(log => log._id !== action.id)
    })
  } else if (action.type === DELETE_LOG_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}

export default logReducer;