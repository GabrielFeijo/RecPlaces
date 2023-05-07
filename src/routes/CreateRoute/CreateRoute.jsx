import React, { useEffect, useState } from 'react';
import styles from './CreateRoute.module.css';
import { Select, SelectFunc } from '../../components/Select/Select';
import { types } from './Tipos';
import { Button } from '../../components/Button/Button';
import { ModalGeoLocation } from '../../components/Modal/Modal';

const CreateRoute = () => {
	const [range, setRange] = useState(50);
	const [vh, setVh] = useState(window.innerHeight);
	const [modal, setModal] = useState(false);
	const [position, setPosition] = useState();

	const [selected, setSelected] = useState({});
	const [filters, setFilters] = useState([]);
	const [fullDay, setFullDay] = useState(false);

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	function handleChange(type, value) {
		setSelected({ ...selected, [type]: !value });

		if (!value) {
			setFilters([...filters, type]);
		} else {
			setFilters(filters.filter((filter) => filter !== type));
		}
		console.log(filters);
	}

	const getPermission = () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			const coords = [position.coords.latitude, position.coords.longitude];
			setPosition(coords);
			console.log(coords);
			setModal(false);
		});
	};

	const createFilter = () => {
		console.log(filters);
		console.log(`Preco: ` + range);
		console.log(`O dia todo: ` + fullDay);

		setModal(true);
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
					<h1 className={styles.title}>Faz tua rota</h1>
					<p className={styles.type}>Tipo de local</p>
					<div>
						{types.map((type, index) => (
							<Select
								type={type}
								key={index}
								onChange={handleChange}
								value={selected[type] ? selected[type] : false}
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
						onChange={() => setFullDay(!fullDay)}
						value={fullDay}
					/>
				</div>
				<Button
					text={'Criar minha rotas'}
					event={() => {
						createFilter();
					}}
				/>
			</div>
		</>
	);
};

export default CreateRoute;
