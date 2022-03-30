import { propertiesGame } from "../../utils/game";
import   "./styles.css";


interface Props {
    value: number;
}

const Square = (props:Props) => {
    
    const {value} = props;

    return (
        <div className="rectangle  d-flex align-items-center justify-content-center" >
            <div className="value">
                {value === 0 ? propertiesGame.dead : propertiesGame.alive }
            </div>
        </div>
    )
}

export default Square;