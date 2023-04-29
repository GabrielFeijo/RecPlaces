import React from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';

import Proximo from '../../assets/proximo.png';
import { CardStar } from '../../components/Card/Card';

import styles from './Eventos.module.css';

export const item = {
	index: 0,
	img: Proximo,
	quantidade: 4,
	title: 'Próximo de mim',
	tipo: 'Restaurante',
	distancia: 4,
};

const Eventos = () => {
	return (
		<div>
			<HeaderPlace
				title={'Eventos'}
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

export default Eventos;
