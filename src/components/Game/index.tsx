import Border from "../Border"

const Game = () => {

    const generateGrid = (row:number,column:number) => {//cambiare il nome in quello che fa(in questo caso crea un array bidimensionale)
        return Array(row).fill(null)
            .map(()=>Array(column).fill("*"))
    }

    return (
        <div>
            <Border squares={generateGrid(8,8)}/>
        </div>
    )
}

export default Game;