import Square from "../Square"
import './styles.css'


const Board = (props:any) => {
    
    return (
        <div className="content">
            {props.squares.map((square:any, i:any) => (
                square.map((s:any,i:any)=>(
                    <Square key={i} value={s}/>
                ))
            ))}
        </div>
    )
}

export default Board; 