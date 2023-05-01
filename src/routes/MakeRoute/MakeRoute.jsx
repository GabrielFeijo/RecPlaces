import React, { useEffect, useState } from 'react';
import styles from './MakeRoute.module.css';
import { Select, SelectFunc } from '../../components/Select/Select';
import { types } from './Tipos';
import { Button } from '../../components/Button/Button';
import { ModalGeoLocation } from '../../components/Modal/Modal';

const MakeRoute = () => {
	const [range, setRange] = useState(50);
	const [vh, setVh] = useState(window.innerHeight);
	const [modal, setModal] = useState(false);
	const [position, setPosition] = useState(null);

	const [filter, setFilter] = useState({});
	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	function handleChange(type, value) {
		setFilter({ ...filter, [type]: !value });
		console.log(filter);
	}

	const getPermission = () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition(position.coords);
			setModal(false);
		});
	};

	return (
		<>
			{modal && (
				<ModalGeoLocation
					setModal={setModal}
					getPermission={getPermission}
				/>
			)}
			<div
				style={{ height: vh - 120 }}
				className={styles.flex}
			>
				<div>
					<p>{position}</p>
					<h1 className={styles.titulo}>Faz tua rota</h1>
					<p className={styles.type}>Tipo de local</p>
					<div>
						{types.map((type, index) => (
							<Select
								type={type}
								key={index}
								onChange={handleChange}
								value={filter[type] ? filter[type] : false}
							/>
						))}
					</div>
					<p className={styles.value}>Valor: R$ {range},00</p>
					<input
						type='range'
						min='1'
						max='1000'
						className={styles.slider}
						onChange={(e) => {
							setRange(e.target.value);
						}}
					/>
					<p className={styles.type}>Horário de Funcionamento</p>

					<SelectFunc
						type={'O dia todo'}
						type2={'Apenas a noite'}
						onChange={handleChange}
						value={filter['O dia todo'] ? filter['O dia todo'] : false}
					/>
				</div>
				<Button
					text={'Criar minha rotas'}
					event={() => {
						setModal(true);
					}}
				/>
			</div>
		</>
	);
};

export default MakeRoute;
