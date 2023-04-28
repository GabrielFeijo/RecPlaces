import React from 'react';
import styles from './MakeRoute.module.css';
import Select from '../../components/Select/Select';

const MakeRoute = () => {
	return (
		<div>
			<h1 className={styles.titulo}>Faz tua rota</h1>
			<p className={styles.type}>Tipo de local</p>

			<div className={styles.flex}>
				<Select />
			</div>
		</div>
	);
};

export default MakeRoute;
