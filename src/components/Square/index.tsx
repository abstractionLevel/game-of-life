import   "./styles.css";


interface Props {
    key: number;
    value: number;
}

const Square = (props:Props) => {
    
    const {value,key} = props;

    return (
        <div className="rectangle  d-flex align-items-center justify-content-center" >
            <div className="value">
                {value === 0 ? "." : "0" }
            </div>
        </div>
    )
}

export default Square;