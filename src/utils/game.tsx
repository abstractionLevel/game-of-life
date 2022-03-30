import InitGame from "../constants/init.json";

export const generateGrid = () => {
    let grid = Array(InitGame[0]["rows"]).fill(0).map(()=>Array(InitGame[0]["cols"]).fill(0))
    grid[2][1] = 1;
    grid[3][1] = 1;
    grid[4][1] = 1;
    return grid;
}
 
export const  propretiesGame = {
    properties : {
        generation: InitGame[0]["generation"],
        rows:       InitGame[0]["rows"],
        cols:       InitGame[0]["cols"],
        dead:       InitGame[0]["dead"],
        alive:      InitGame[0]["alive"],   
    }
}

