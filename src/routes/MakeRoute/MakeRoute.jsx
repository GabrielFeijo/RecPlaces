import React, { useState } from 'react';
import styles from './MakeRoute.module.css';
import Select from '../../components/Select/Select';
import { types } from './Tipos';
import InputRange from 'react-input-range';

const MakeRoute = () => {
	const [range, setRange] = useState({
		min: 5,
		max: 10,
	});

	return (
		<div>
			<h1 className={styles.titulo}>Faz tua rota</h1>
			<p className={styles.type}>Tipo de local</p>
			<div className={styles.flex}>
				{types.map((type, index) => (
					<Select
						type={type}
						key={index}
					/>
				))}
			</div>
			<p className={styles.type}>Valor</p>

			<input
				type='range'
				min='1'
				max='100'
				className={styles.slider}
				id='myRange'
			/>
		</div>
	);
};

export default MakeRoute;
