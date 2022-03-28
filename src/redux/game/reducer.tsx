import { GENERATE_LIFE } from "./actionType";

const generateGrid = (row:number,column:number) => {//cambiare il nome in quello che fa(in questo caso crea un array bidimensionale)
    return Array(row).fill(null)
        .map(()=>Array(column).fill(null))
}

const initialState = {
    grid: generateGrid(8,8)
}

const reducer = (state = initialState,action:any) => {
    switch(action.type) {
        case GENERATE_LIFE:
            return {
                ...state,
                grid:action.payload
            }
        default: return state;
    }
}

export default reducer;