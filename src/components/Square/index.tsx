import { propertiesGame } from "../../utils/game";
import   "./styles.css";


interface Props {
    value: number;
}

const Square = (props:Props) => {
    
    const {value} = props;

    return (
        <div className="rectangle  d-flex align-items-center justify-content-center" >
            {value === 0 ?//stampo l'icona . (dead) oppure * (alive)
                <p className="labelDead">
                    {propertiesGame.dead}
                </p>
            : 
                <p className="labelAlive">
                    {propertiesGame.alive }
                </p>
            }
        </div>
    )
}

export default Square;