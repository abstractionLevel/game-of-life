import Square from "../Square"
import './styles.css'


const Border = (props:any) => {
    return (
        <div className="container">
            <div className="grid-container-info">
                <p className="label-generation">Generations : {props.generation}</p>
                <p className="label-size-grid"> 8 8 </p>
            </div>
            <div className="grid-container">
                {props.squares.map((c:any) => (
                    c.map((r:any)=>(
                        <Square  value={r}/>
                    ))
                ))}
                </div>
        </div>
        
    )
}



export default Border; 