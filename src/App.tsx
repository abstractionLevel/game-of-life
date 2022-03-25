import { useState } from 'react';
import './App.css';
import Board from './components/Border';

let count: string;

function App() {


	const generateGrid = (row:number,column:number) => {
        return Array(row).fill(null)
            .map(()=>Array(column).fill("*"))
          
    }

    console.log(generateGrid(8,8))

	return (
		<div>
			<Board squares={generateGrid(8,8)}/>
		</div>
	);
}

export default App;
