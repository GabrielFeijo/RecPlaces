import React from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';

import Proximo from '../../assets/proximo.png';
import { CardStar } from '../../components/Card/Card';

import styles from './Places.module.css';

export const item = {
	index: 0,
	img: Proximo,
	quantidade: 4,
	title: 'Próximo de mim',
	tipo: 'Restaurante',
	distancia: 4,
};

const Places = () => {
	return (
		<div>
			<HeaderPlace />

			<div className={styles.flex}>
				<CardStar item={item} />
				<CardStar item={item} />
				<CardStar item={item} />
				<CardStar item={item} />
				<CardStar item={item} />
			</div>
		</div>
	);
};

export default Places;
