import Square from "../Square"
import './styles.css'


const Border = (props:any) => {
    return (
        <div className="content">
            {props.squares.map((c:any) => (
                c.map((r:any)=>(
                    <Square  value={r}/>
                ))
            ))}
        </div>
    )
}

export default Border; 