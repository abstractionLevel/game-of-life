import { combineReducers } from "@reduxjs/toolkit";
import gridReducer from './game/reducer';

const rootReducer = combineReducers({
    user: gridReducer
})

export default rootReducer;