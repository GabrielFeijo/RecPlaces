import React, { useState } from 'react';
import styles from './MakeRoute.module.css';
import Select from '../../components/Select/Select';
import { types } from './Tipos';

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
			<p className={styles.type}>Horário de Funcionamento</p>
			<div className={styles.flex}>
				<Select type={'O dia todo'} />
				<Select type={'Apenas a noite'} />
			</div>
		</div>
	);
};

export default MakeRoute;
