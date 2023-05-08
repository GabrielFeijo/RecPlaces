import React, { useEffect, useState } from 'react';
import styles from './Description.module.css';

import desc from '../../assets/desc.png';
import { Button } from '../../components/Button/Button';
import Evaluation from '../../components/Evaluation/Evaluation';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import recFetch from '../../axios/config';

const item = {
	quantidade: 4,
};

const Description = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = useParams();
	const [description, setDescription] = useState([]);
	const [addedRoutes, setAddedRoutes] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await recFetch.get(`/api/description/${id}`);
		setDescription(data.data);
		const routes = location.state.routes;

		let existe = false;
		for (let route in routes) {
			if (route.id == data._id) {
				existe = true;
			}
		}
		if (!existe) {
			setAddedRoutes([
				routes,
				{
					id: data.data._id,
					address: `${data.data.local.rua}, ${data.data.local.numero},{' '}${data.data.local.CEP} - ${data.data.local.cidade}{' '}${data.data.local.UF}`,
					lat: 1,
					lng: 2,
				},
			]);
		}
	};

	return (
		<>
			{description.local && (
				<div className={styles.box}>
					<div>
						<h1 className={styles.title}>{description.nome}</h1>
						<img
							src={description.img}
							className={styles.img}
						/>
						<p className={styles.desc_infos}>{description.contato}</p>
						<p className={styles.desc_infos}>
							{description.local.rua}, {description.local.numero},{' '}
							{description.local.CEP} - {description.local.cidade}{' '}
							{description.local.UF}
						</p>
						<p className={styles.desc_text}>{description.desc}</p>
						<p className={styles.desc_infos}>Avaliações</p>

						<div className={styles.comments}>
							<Evaluation item={item} />
							<Evaluation item={item} />
							<Evaluation item={item} />
							<Evaluation item={item} />
						</div>
					</div>

					<Button
						text={'Adicionar essa rota'}
						event={() =>
							navigate('/routes', {
								state: { routes: addedRoutes },
							})
						}
					/>
				</div>
			)}
		</>
	);
};

export default Description;
