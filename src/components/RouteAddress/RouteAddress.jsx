import React from 'react';

import styles from './RouteAddress.module.css';
import { CloseCircle } from 'iconsax-react';

const RouteAddress = ({ address, handleClick }) => {
	return (
		<div className={styles.flex_place}>
			<p>{address} </p>
			<CloseCircle
				size='20'
				color='rgba(0, 0, 0, 0.7)'
				onClick={handleClick}
			/>
		</div>
	);
};

export default RouteAddress;
