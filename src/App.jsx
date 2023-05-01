import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './routes/Header/Header';

function App() {
	const location = useLocation();
	return (
		<>
			{location.pathname !== '/' &&
				location.pathname !== '/login' &&
				location.pathname !== '/register' && <Header />}
			<Outlet />
		</>
	);
}

export default App;
