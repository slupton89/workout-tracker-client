import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  UPDATE_TIME
} from '../actions/timer';

const initialState = {
  startTime: 0,
  endTime: 0,
  totalTime: 0,
  currentTime: 0,
  running: false
}


export const timerReducer = (state = initialState, action) => {
  if(action.type === START_TIMER) {
    return Object.assign({}, state, {
      startTime: action.time,
      running: true
    })
  } else if(action.type === STOP_TIMER) {
    return Object.assign({}, state, {
      endTime: action.time,
      running: false
    })
  } else if(action.type === RESET_TIMER) {
    return initialState
  } else if(action.type === UPDATE_TIME) {
    return Object.assign({}, state, {
      currentTime: action.time
    })
  }
  return state;
}

export default timerReducer;