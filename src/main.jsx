import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx';
import Home from './routes/Home/Home.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Login from './routes/Login/Login.jsx';
import Cadastro from './routes/Cadastro/Cadastro.jsx';
import Description from './routes/Description/Description.jsx';
import Places from './routes/Places/Places.jsx';
import Rotas from './routes/Rotas/Rotas.jsx';
import Roteiro from './routes/Roteiro/Roteiro.jsx';
import MakeRoute from './routes/MakeRoute/MakeRoute.jsx';
import HistoryPoints from './routes/HistoryPoint/HistoryPoints.jsx';
import CheckIn from './routes/CheckIn/CheckIn.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/register',
				element: <Cadastro />,
			},
			{
				path: '/description',
				element: <Description />,
			},
			{
				path: '/places',
				element: <Places />,
			},
			{
				path: '/rotas',
				element: <Rotas />,
			},
			{
				path: '/roteiro',
				element: <Roteiro />,
			},
			{
				path: '/makeroute',
				element: <MakeRoute />,
			},
			{
				path: '/history',
				element: <HistoryPoints />,
			},
			{
				path: '/checkin',
				element: <CheckIn />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
