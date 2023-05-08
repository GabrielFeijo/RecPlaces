import React from 'react';
import { useLocation } from 'react-router-dom';

const PropsTest = (props) => {
	const location = useLocation();
	console.log(location.state.routes);
	return <div>PropsTest</div>;
};

export default PropsTest;
