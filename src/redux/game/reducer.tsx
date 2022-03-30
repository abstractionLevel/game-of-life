import {UPDATE_GRID } from "./actionType";
import initGame from "../../constants/init.json";
import { generateGrid } from "../../utils/game";




const propertyGame  = () => {
    return initGame.map((val)=>(val))
}


const initialState = {//inizializzo lo stato della griglia
    grid:generateGrid(),
    propertyGame: propertyGame()
    
}

const reducer = (state = initialState,action:any) => {
    switch(action.type) {
        case UPDATE_GRID:
            return {
                ...state,
                grid:action.payload
            }
        default: return state;
    }
}

export default reducer;