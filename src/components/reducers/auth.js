import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  CLEAR_AUTH,
  SET_AUTH
} from '../actions/auth'

const initialState = {
  authToken: null,
  user: null,
  loading: false,
  error: null
}

export const authReducer = (state=initialState, action) => {
  if (action.type === FETCH_AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_AUTH_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      loading: false,
      error: null,
      user: action.user
    })
  } else if (action.type === FETCH_AUTH_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      user: null
    })
  } else if(action.type === SET_AUTH) {
    return Object.assign({}, state, {
      authToken: action.authToken
    })
  }
  return state
}

export default authReducer;