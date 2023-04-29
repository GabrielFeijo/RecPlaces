import React from 'react';
import styles from './Local.module.css';

const Local = ({ data, local, pontos }) => {
	return (
		<div className={styles.box_local}>
			<p>{data}</p>
			<div className={styles.flex}>
				<p className={styles.local}>{local}</p>
				<p className={styles.points}>+{pontos} pontos</p>
			</div>
		</div>
	);
};

export default Local;
