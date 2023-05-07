import React, { useState } from 'react';
import HeaderPlace from '../../components/HeaderPlace/HeaderPlace';
import { LocationCard } from '../../components/Card/Card';
import Marco from '../../assets/Marco.png';
import { Button } from '../../components/Button/Button';

import styles from './CheckIn.module.css';
import { Modal } from '../../components/Modal/Modal';
import recFetch from '../../axios/config';

const item = {
	img: Marco,
	title: 'Marco Zero',
	quantidade: 5,
	tipo: 'Ponto turístico',
};

const CheckIn = () => {
	const [position, setPosition] = useState(null);
	const [modal, setModal] = useState(false);
	const [location, setLocation] = useState();
	const [filter, setFilter] = useState('');
	const getPermission = () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition(position.coords);
			setModal(false);
		});
	};
	const filterEvents = async (e) => {
		setFilter(e.target.value);

		const valor = e.target.value;
		const text = valor.replace(/ /g, '%20');

		const result = await recFetch.get(`/api/searchPlaces?search=${text}`);

		setLocation(result.data);
	};

	const [checked, setChecked] = useState('');
	console.log(checked);
	const selected = (id) => {
		if (id === checked) {
			setChecked('');
		} else {
			setChecked(id);
		}
	};

	return (
		<>
			{modal && (
				<Modal
					setModal={setModal}
					getPermission={getPermission}
				/>
			)}
			<div className={styles.flex}>
				<div>
					<HeaderPlace
						title={'Qual o local do Recife Antigo você está?'}
						placeholder={'Digite o local'}
						value={filter}
						onChange={filterEvents}
					/>
					<div className={styles.flex2}>
						{location &&
							location.map((card, index) => (
								<LocationCard
									item={card}
									selected={() => {
										selected(card._id);
									}}
									value={checked == card._id ? true : false}
									key={index}
								/>
							))}
					</div>
				</div>
				{checked !== '' && (
					<Button
						text={'Fazer check-in'}
						event={() => {
							setModal(true);
						}}
					/>
				)}
			</div>
		</>
	);
};

export default CheckIn;
