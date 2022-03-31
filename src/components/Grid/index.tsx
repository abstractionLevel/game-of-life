import Square from "../Square"
import './styles.css'
import { propertiesGame } from "../../utils/game"
import { Col, Container, Row } from "react-bootstrap"


const Grid = (props:any) => {
    return (
        <Container>
            <Row >
                <Col className="col-info">
                    <h4>
                        <p className="text-center">Game of Life </p>
                    </h4>
                    <p className="label-description">
                        The Game of Life is not your typical computer game. <br/> 
                        It is a cellular automaton, and was invented<br/>
                        by Cambridge mathematician John Conway.<br/>
                        This game became widely known when it was mentioned <br/>
                        in an article published by Scientific American in 1970.<br/>
                        It consists of a grid of cells which, based on <br/>
                        a few mathematical rules, can live, die or multiply. <br/>
                        Depending on the initial conditions, the cells form various
                        <br/> patterns throughout the course of the game.
                    </p>
                    <h5 className="mt-2  ">
                        <p className="text-center">Rule</p>
                    </h5>
                    <p className="mb-5">
                        1)Any live cell with fewer than two live neighbours dies<br/>

                        2)Any live cell with two or three live neighbours live on to the next generation<br/>
                        3)Any live cell with more than three live neighbours dies<br/>
                        4)Any dead cell with exactly three live neighbours becomes a live cell<br/>
                    </p>
                </Col>
                <Col>
                    <div className="grid-container-info mt-2">
                        <p className="label-generation">Generations : {props.generation}</p>
                        <p className="label-size-grid"> {propertiesGame.rows}  {propertiesGame.cols} </p>
                    </div>
                    <div className="grid-container ">
                        {props.squares.map((c:any) => (//print the grid 
                            c.map((r:any)=>(
                                <Square  value={r}/>
                            ))
                        ))}
                    </div>
                </Col>
                <Col >
                </Col>
            </Row>
        </Container>

        
    )
}

export default Grid; 