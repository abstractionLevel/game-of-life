import Border from "../Border"
import { connect } from "react-redux";
import { updateGrid } from "../../redux/game/action";
import { useEffect, useState } from "react";
import { propretiesGame } from "../../utils/game";

const positions = [
    [0, 1], // right
    [0, -1], // left
    [1, -1], // top left
    [-1, 1], // top right
    [1, 1], // top
    [-1, -1], // bottom
    [1, 0], // bottom right
    [-1, 0], // bottom left
];



const Game = (props:any) => {

    const [generation,setGeneration] = useState(0);
    const [running , setRunning] = useState(false);

    
    console.log(propretiesGame.properties.alive)

    const countNeighbors = (grid:any,i:any,t:any) => {    
        let summ = 0;
        positions.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = t + y;
            if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid.length) {
                if(grid[newI][newJ]===1) { 
                    summ += grid[newI][newJ]
                }
            }
        });
        return summ;
    }
    
    const startGame = (grid:any) => {
        let gridCopy = JSON.parse(JSON.stringify(grid));
        for (let i = 0; i < gridCopy.length; i++) {
            for (let j = 0; j < gridCopy.length; j++) {
                let neighbors = countNeighbors(grid,i,j);
                if (grid[i][j] === 1 && neighbors < 2 ) { //se la cellula ha meno di due vicini o piu di tre la setto a 0( muore)
                    gridCopy[i][j] = 0;
                } else if (grid[i][j] === 1 && (neighbors === 2  || neighbors === 3)) {//
                    gridCopy[i][j] = 1;
                }else if (grid[i][j] === 1 && neighbors > 3) {//
                    gridCopy[i][j] = 0;
                }else if (grid[i][j] === 0 && neighbors === 3) {//
                    setGeneration(generation+1)
                    gridCopy[i][j] = 1;
                }
            }
        }
        props.updateGrid(gridCopy)
    } 
        
    useEffect(() => {
        
        
        setTimeout(() => {
            startGame(props.grid)
        }, 2000);          
    }, [props.grid]);

    return (
        <div>
            <button
                onClick={()=>{
                    setRunning(!running)
                }}>
                {running ? "stop" : "start"}
            </button>
            <p>generazione: {generation}</p>
            <Border squares={props.grid} />
        </div>
    )
}

const mapStateProps = (state:any) => {
    return {
        grid: state.grid.grid,
        propertyGame: state.grid.propertyGame,
    }
}

const mapDispatchToProps = (dispatch:any) => ({
    updateGrid: (value:any) => dispatch(updateGrid(value)),
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(Game);