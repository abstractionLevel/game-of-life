import { UPDATE_GRID } from "./actionType";


export const updateGrid = (value:any) => {
    return async (dispatch:any) => {
        dispatch({
            type:UPDATE_GRID,
            payload:value,
        })
    }
}