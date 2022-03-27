import './App.css';
import Game from './components/Game';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<div>
			<Provider store={store}>
				<Game/>
			</Provider>
		</div>
	);
}

export default App;
