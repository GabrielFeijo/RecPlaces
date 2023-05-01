import React, { useEffect, useState } from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';

import Proximo from '../../assets/proximo.png';
import { CardStar } from '../../components/Card/Card';

import styles from './Eventos.module.css';
import { useParams } from 'react-router-dom';
import recFetch from '../../axios/config';

export const item = {
	index: 0,
	img: Proximo,
	stars: 4,
	nome: 'Restaurante',
	tipo: 'Restaurante',
	distancia: 4,
};

const Eventos = () => {
	const { tipo } = useParams();
	const [title, setTitle] = useState('');
	const [allEvents, setAllEvents] = useState([]);
	const [events, setEvents] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		switch (tipo) {
			case 'proximos':
				setTitle('Próximos de mim');
				break;
			case 'cidade':
				setTitle('Eventos');
				break;
			default:
				setTitle('Todos');
				fetchData(`/api/places`);
		}
	}, []);

	const fetchData = async (name) => {
		const places = await recFetch.get(name);
		setEvents(places.data);
		setAllEvents(places.data);
	};

	const filterEvents = (e) => {
		setFilter(e.target.value);

		const valor = e.target.value;

		setEvents(
			allEvents.filter((event) =>
				event.nome.toLowerCase().includes(valor.toLowerCase())
			)
		);
	};

	return (
		<div>
			<HeaderPlace
				title={title}
				placeholder={'Onde você quer ir'}
				value={filter}
				onChange={filterEvents}
			/>
			<div className={styles.flex}>
				{events.length > 0 &&
					events.map((event, index) => (
						<CardStar
							item={event}
							key={index}
						/>
					))}
			</div>
		</div>
	);
};

export default Eventos;
