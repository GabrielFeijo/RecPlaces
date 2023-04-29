import React from 'react';
import styles from './Loading.module.css';

import loading from '../../assets/loading.png';

const Loading = () => {
	return (
		<div className={styles.wrap}>
			<div></div>
			<img
				src={loading}
				alt='Logo da RecPlaces'
			/>
			<p>RecPlaces - 2023</p>
		</div>
	);
};

export default Loading;
