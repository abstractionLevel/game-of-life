import { combineReducers } from "@reduxjs/toolkit";
import gridReducer from './game/reducer';


const rootReducer = combineReducers({
    grid: gridReducer
})

export default rootReducer;