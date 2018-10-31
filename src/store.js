import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from './components/reducers/auth';
import logsReducer from './components/reducers/logs';
import timerReducer from './components/reducers/timer';
import {loadAuthToken} from './local-storage';
import {setAuth, refreshAuthToken} from './components/actions/auth';
import {getWorkouts} from './components/actions/logs';

const mainReducer = (s = null) => s;

const store = createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer,
    logs: logsReducer,
    timer: timerReducer
  }),
  applyMiddleware(thunk),
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuth(token));
    store.dispatch(refreshAuthToken());
    store.dispatch(getWorkouts());
}

export default store;