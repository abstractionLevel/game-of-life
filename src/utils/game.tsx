import InitGame from "../constants/init.json";

export const generateGrid = () => {//create the grid
    let grid = Array(InitGame[0]["rows"]).fill(0).map(()=>Array(InitGame[0]["cols"]).fill(0))

    //set some cells alive
    grid[2][3] = 1;
    grid[2][2] = 1;
    grid[2][4] = 1;
    grid[1][4] = 1;
    grid[0][3] = 1;
  
    return grid;
}
 
export const  propertiesGame = {

    generation: InitGame[0]["generation"],
    rows:       InitGame[0]["rows"],
    cols:       InitGame[0]["cols"],
    dead:       InitGame[0]["dead"],
    alive:      InitGame[0]["alive"],   
}

export const positions = [
    //it is used to control the position of the other cells around the cell
    [0, 1], // right
    [0, -1], // left
    [1, -1], // top left
    [-1, 1], // top right
    [1, 1], // top
    [-1, -1], // bottom
    [1, 0], // bottom right
    [-1, 0], // bottom left
];

