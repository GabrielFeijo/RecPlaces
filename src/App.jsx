import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './routes/Header/Header';
import Loading from './components/Loading/Loading';

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
