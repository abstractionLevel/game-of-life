import InitGame from "../constants/init.json";
import pattern from "./pattern";




const  getRandomNumber = (max:number)  => {
    return Math.floor(Math.random() * max);
  }


//get random pattern of alive cells
const getRandomPattern = () => {
    const numb = getRandomNumber(3);
    switch(numb) {
        case 0:
            return pattern.a;
        /*case 1:
            return pattern.b;*/
        case 2:
            return pattern.c;
        case 3:
            return pattern.d;
        default:
            return;
    }
}

export const generateGrid = () => {//create the grid
    let grid = Array(InitGame[0]["rows"]).fill(0).map(()=>Array(InitGame[0]["cols"]).fill(0))
    getRandomPattern()?.forEach(([y,x])=>{
        grid[y][x] = 1;//assign alive cells
    })
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

