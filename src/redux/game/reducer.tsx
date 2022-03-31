import {UPDATE_GRID } from "./actionType";
import { generateGrid } from "../../utils/game";


const initialState = {
    grid:generateGrid(),//generate the grid in the initial state    
}

const reducer = (state = initialState,action:any) => {
    switch(action.type) {
        case UPDATE_GRID://when the grid updates it created and return the new copy
            return {
                ...state,//create a copy
                grid:action.payload//assign the values from the action
            }
        default: return state;
    }
}

export default reducer;