// REDUCERS
import Counter from './counter_reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Counter,
});

export default rootReducer;
