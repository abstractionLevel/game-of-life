import Border from "../Border"
import { connect } from "react-redux";
import { updateGrid } from "../../redux/game/action";
import { useEffect, useState } from "react";
import { positions } from "../../utils/game";


const Game = (props:any) => {

    const [generation,setGeneration] = useState(0);

    //function that counts how many cells are active
    const countNeighbors = (grid:any,i:any,t:any) => {    
        let summ = 0;
        positions.forEach(([x, y]) => {//check every position around the cell 
            const newI = i + x;
            const newJ = t + y;
            //check just positive values and the values are  less than the size of grid
            if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid.length) {
                if(grid[newI][newJ]===1) { //only check positions that have value 1
                    summ += grid[newI][newJ]//increment  
                }
            }
        });
        return summ;//return the summ of cells
    }
    

    

    const startGame = (grid:any) => {

        let gridCopy = JSON.parse(JSON.stringify(grid));//copy grid in gridCopy

        //start the iteration of grid
        for (let y = 0; y < gridCopy.length; y++) {
            for (let x = 0; x < gridCopy.length; x++) {

                let neighbors = countNeighbors(grid,y,x);//assing  the sum of neighbors

                //start to check the rule of game
                if (grid[y][x] === 1 && neighbors < 2 ) { //Any live cell with fewer than two live neighbours dies
                    gridCopy[y][x] = 0;
                } else if (grid[y][x] === 1 && (neighbors === 2  || neighbors === 3)) {//Any live cell with two or three live neighbours live on to the next generation
                    gridCopy[y][x] = 1;
                }else if (grid[y][x] === 1 && neighbors > 3) {//Any live cell with more than three live neighbours dies
                    gridCopy[y][x] = 0;
                }else if (grid[y][x] === 0 && neighbors === 3) {//Any dead cell with exactly three live neighbours becomes a live cell.
                    setGeneration(generation+1)//increment generation
                    gridCopy[y][x] = 1;
                }
            }
        }
        props.updateGrid(gridCopy)//update the grid
    } 
        
    useEffect(() => {
        setTimeout(() => {
            startGame(props.grid)
        }, 2000);          
    }, [props.grid]);


    return (
        <div>
            <Border squares={props.grid} generation={generation} />
        </div>
    )
}

const mapStateProps = (state:any) => {
    return {
        //take the states from the store
        grid: state.grid.grid,
        propertyGame: state.grid.propertyGame,
    }
}

const mapDispatchToProps = (dispatch:any) => ({
    updateGrid: (value:any) => dispatch(updateGrid(value)),//action to update the grid in the store
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(Game);