import Square from "../Square"
import './styles.css'


const Border = (props:any) => {
    return (
        <div className="content">
            {props.squares.map((c:any, i:any) => (
                c.map((r:any,i:any)=>(
                    <Square key={i} value={r}/>
                ))
            ))}
        </div>
    )
}

export default Border; 