import React from 'react';
import styles from './Points.module.css';

import logo from '../../assets/points.png';
import { useNavigate } from 'react-router-dom';

const Points = ({ title, description, route }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.box_points}
			onClick={() => {
				navigate(route);
			}}
		>
			<div className={styles.box_texto}>
				<h2 className={styles.titulo}>{title}</h2>
				<p className={styles.desc_points}>{description}</p>
			</div>
			<img
				src={logo}
				alt='Logo'
			/>
		</div>
	);
};

export default Points;
