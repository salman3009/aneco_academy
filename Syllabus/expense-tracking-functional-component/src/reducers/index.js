import { combineReducers } from "redux";
import login from './login';

const rootReducers = combineReducers({
    login:login
});

export default rootReducers;