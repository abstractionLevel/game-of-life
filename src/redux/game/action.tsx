import { UPDATE_GRID } from "./actionType";


//used to update the status of the grid
export const updateGrid = (value:any) => {
    return async (dispatch:any) => {
        dispatch({
            type:UPDATE_GRID,
            payload:value,
        })
    }
}