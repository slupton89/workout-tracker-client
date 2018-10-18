import {
  FETCH_LOG_REQUEST,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_FAILURE
} from '../actions/logging';

const initialState = {
  user: null,
  loading: false,
  error: null
}

export const logReducer = (state=initialState, action) => {
  if (action.type === FETCH_LOG_REQUEST) {
    console.log('request', action.auth);
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_LOG_SUCCESS) {
     console.log('success action', action.user)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      user: action.user.id
    })
  } else if (action.type === FETCH_LOG_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}