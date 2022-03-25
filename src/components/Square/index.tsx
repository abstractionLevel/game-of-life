import   "./styles.css";


interface Props {
    key: number;
    value: string;
}

const Square = (props:Props) => {
    
    const {value,key} = props;

    return (
        <div className="rectangle  d-flex align-items-center justify-content-center">
            {value}
        </div>
    )
}

export default Square;