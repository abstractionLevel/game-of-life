import { GENERATE_LIFE } from "./actionType";

const initialState = {
    grid: []
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