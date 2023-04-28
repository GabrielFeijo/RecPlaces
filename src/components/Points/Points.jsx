import React from 'react';
import styles from './Points.module.css';

import logo from '../../assets/points.png';

const Points = () => {
	return (
		<div className={styles.box_points}>
			<div className={styles.box_texto}>
				<h2 className={styles.titulo}>Ganhe pontos!</h2>
				<p className={styles.desc_points}>
					Ganhe pontos visitando o Recife Antigo, e troque por cupons!
				</p>
			</div>
			<img
				src={logo}
				alt='Logo'
			/>
		</div>
	);
};

export default Points;
