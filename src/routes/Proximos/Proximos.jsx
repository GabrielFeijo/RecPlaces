import React from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';

import Proximo from '../../assets/proximo.png';
import { CardStar } from '../../components/Card/Card';

import styles from './Proximos.module.css';

export const item = {
	index: 0,
	img: Proximo,
	quantidade: 3,
	title: 'Exemplo',
	tipo: 'Restaurante',
	distancia: 4,
};

const Proximos = () => {
	return (
		<div>
			<HeaderPlace
				title={'Próximo de mim'}
				placeholder={'Onde você quer ir'}
			/>

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

export default Proximos;
