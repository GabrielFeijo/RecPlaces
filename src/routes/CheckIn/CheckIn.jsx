import React from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';
import { CardLocal } from '../../components/Card/Card';
import Marco from '../../assets/Marco.png';
import { Button } from '../../components/Button/Button';

import styles from './CheckIn.module.css';

const item = {
	img: Marco,
	title: 'Marco Zero',
	quantidade: 5,
	tipo: 'Ponto turístico',
};

const CheckIn = () => {
	return (
		<div className={styles.flex}>
			<div>
				<HeaderPlace
					title={'Qual o local do Recife Antigo você está?'}
					placeholder={'Digite o local'}
				/>
				<CardLocal item={item} />
			</div>
			<Button text={'Fazer check-in'} />
		</div>
	);
};

export default CheckIn;
