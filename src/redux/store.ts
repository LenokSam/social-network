import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';

let reducers = combineReducers({
  messages:dialogsReducer,
  profile:profileReducer,
})


let store= createStore(reducers)
export default store