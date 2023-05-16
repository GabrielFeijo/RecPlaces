import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx';
import Home from './routes/Home/Home.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import Description from './routes/Description/Description.jsx';
import Events from './routes/Events/Events.jsx';
import RoadMap from './routes/RoadMap/RoadMap.jsx';
import CreateRoute from './routes/CreateRoute/CreateRoute.jsx';
import HistoryPoints from './routes/HistoryPoint/HistoryPoints.jsx';
import CheckIn from './routes/CheckIn/CheckIn.jsx';
import Completed from './routes/Completed/Completed.jsx';
import Points from './routes/Points/Points.jsx';
import Initial from './routes/Initial/Initial.jsx';
import Feed from './routes/Feed/Feed.jsx';
import Post from './routes/Post/Post.jsx';
import InteractiveMap from './routes/InteractiveMap/InteractiveMap.jsx';
import RouteInstructions from './routes/RouteInstructions/RouteInstructions.jsx';
import PropsTest from './routes/PropsTest/PropsTest.jsx';
import Routes from './routes/Routes/Routes.jsx';
import Profile from './routes/Profile/Profile.jsx';
import Faq from './routes/Faq/Faq.jsx';
import AvailableRewards from './routes/AvailableRewards/AvailableRewards.jsx';
import ChosenReward from './routes/ChosenReward/ChosenReward.jsx';
import RedeemReward from './routes/RedeemReward/RedeemReward.jsx';

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
				element: <Register />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/feed',
				element: <Feed />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/faq',
				element: <Faq />,
			},
			{
				path: '/post/:id',
				element: <Post />,
			},
			{
				path: '/description/:id',
				element: <Description />,
			},
			{
				path: '/events/:tipo',
				element: <Events />,
			},
			{
				path: '/routes',
				element: <Routes />,
			},
			{
				path: '/roadmap',
				element: <RoadMap />,
			},
			{
				path: '/createroute',
				element: <CreateRoute />,
			},
			{
				path: '/history',
				element: <HistoryPoints />,
			},
			{
				path: '/rewards',
				element: <AvailableRewards />,
			},
			{
				path: '/rewards/:id',
				element: <ChosenReward />,
			},
			{
				path: '/redeemreward',
				element: <RedeemReward />,
			},
			{
				path: '/checkin',
				element: <CheckIn />,
			},
			{
				path: '/completed',
				element: <Completed />,
			},
			{
				path: '/points',
				element: <Points />,
			},
			{
				path: '/interactivemap',
				element: <InteractiveMap />,
			},
			{
				path: '/routeinstructions',
				element: <RouteInstructions />,
			},
			{
				path: '/props',
				element: <PropsTest />,
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
