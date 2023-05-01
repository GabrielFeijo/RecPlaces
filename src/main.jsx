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
import Eventos from './routes/Eventos/Eventos.jsx';
import Roteiro from './routes/Roteiro/Roteiro.jsx';
import MakeRoute from './routes/MakeRoute/MakeRoute.jsx';
import HistoryPoints from './routes/HistoryPoint/HistoryPoints.jsx';
import CheckIn from './routes/CheckIn/CheckIn.jsx';
import Sucess from './routes/Sucess/Sucess.jsx';
import Points from './routes/Points/Points.jsx';
import Initial from './routes/Initial/Initial.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: '/',
				element: <Initial />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Cadastro />,
			},
			{
				path: '/home',
				element: <Home />,
			},

			{
				path: '/description/:id',
				element: <Description />,
			},
			{
				path: '/eventos/:tipo',
				element: <Eventos />,
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
			{
				path: '/completed',
				element: <Sucess />,
			},
			{
				path: '/points',
				element: <Points />,
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
