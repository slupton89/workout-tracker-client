import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import authReducer from './components/reducers/auth'

const mainReducer = (s = null) => s;

export default createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);