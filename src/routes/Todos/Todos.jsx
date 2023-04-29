import React, { useEffect, useState } from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';

import Proximo from '../../assets/proximo.png';
import { CardStar } from '../../components/Card/Card';

import styles from './Todos.module.css';
import recFetch from '../../axios/config';

export const item = {
	index: 0,
	img: Proximo,
	quantidade: 3,
	title: 'Bar e Restaurabte',
	tipo: 'Restaurante',
	distancia: 4,
};

const Todos = () => {
	const [places, setPlaces] = useState([]);

	const fetchData = async () => {
		const placeBD = await recFetch.get(`/api/places`);
		setPlaces(placeBD.data);
		console.log(placeBD.data);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<HeaderPlace
				title={'Todos'}
				placeholder={'Onde você quer ir'}
			/>{' '}
			<div className={styles.flex}>
				{places.length > 0 &&
					places.map((place) => (
						<CardStar
							item={place}
							key={place._id}
						/>
					))}
			</div>
		</div>
	);
};

export default Todos;
