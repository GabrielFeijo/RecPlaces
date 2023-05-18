import React from 'react';
import styles from './Loading.module.css';

import loading from '../../../public/assets/loading.png';

export const Loading = () => {
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

export const LoadingRequest = () => {
	return (
		<div className={styles.box}>
			<div className={styles.ldsRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<p>Carregando</p>
		</div>
	);
};
