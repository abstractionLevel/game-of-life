import Border from "../Border"
import { connect } from "react-redux";

const Game = (props:any) => {

    return (
        <div>
            <Border squares={props.grid} />
        </div>
    )
}

const mapStateProps = (state:any) => {
    return {
        grid: state.grid.grid
    }
}

export default connect(
    mapStateProps,
    null
)(Game);