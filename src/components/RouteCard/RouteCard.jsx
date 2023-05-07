import React from 'react';
import styles from './RouteCard.module.css';
import { CloseCircle } from 'iconsax-react';

const RouteCard = ({ text }) => {
	return (
		<div className={styles.flex_place}>
			<p>{text}</p>
			<CloseCircle
				size='25'
				color='rgba(0, 0, 0, 0.7)'
			/>
		</div>
	);
};

export default RouteCard;
