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

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
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
				path: '/description',
				element: <Description />,
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
