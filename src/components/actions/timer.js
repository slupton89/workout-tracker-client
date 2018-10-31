import timo from 'timo';
//timer start
export const START_TIMER = 'START_TIMER';
export const startTimer = (time) => ({
  type: START_TIMER,
  time
})
//timer stop
export const STOP_TIMER = 'STOP_TIMER';
export const stopTimer = (time) => ({
  type: STOP_TIMER,
  time
})
//timer reset
export const RESET_TIMER = 'RESET_TIMER';
export const resetTimer = () => ({
  type: RESET_TIMER
})

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = (time) => ({
  type: UPDATE_TIME,
  time
})

let running = false;
let time = new Date().getTime() / 1000;
let stopwatch = timo;
export const tick = (dispatch) => {
  const nextTick = () => dispatch => {
    time = time + 1;
    if(running) {
      setTimeout(() => {
        stopwatch.setNowInTimerForKey('stop');
        dispatch(updateTime(stopwatch.duration()));
        dispatch(nextTick());
      }, 1000);
    } else {
      clearTimeout();
    }

  }
  dispatch(nextTick());
}

export const runTimer = () => dispatch => {
  dispatch(startTimer(time * 1000))
  stopwatch.start()
  running = true;
}

export const endTimer = () => dispatch => {
  dispatch(stopTimer(time * 1000));
  running = false;
  stopwatch.stop()
}

export const clearTimer = () => dispatch => {
  dispatch(resetTimer());
  stopwatch.timer.start = 0;
  stopwatch.timer.stop = 0;
}
