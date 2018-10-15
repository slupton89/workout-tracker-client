import {
  FETCH_CHEESE_REQUEST,
  FETCH_CHEESE_SUCCESS,
  FETCH_CHEESE_FAILURE
} from '../actions/'

const initialState = {
  cheese: [`american cheese isn't real cheese`],
  loading: false,
  error: null
}

export const cheeseReducer = (state=initialState, action) => {
  if (action.type === FETCH_CHEESE_REQUEST) {
    console.log('request', action.cheese);
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_CHEESE_SUCCESS) {
    // console.log('action', action.cheese)
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheese: action.cheese
    })
  } else if (action.type === FETCH_CHEESE_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}

export default cheeseReducer;