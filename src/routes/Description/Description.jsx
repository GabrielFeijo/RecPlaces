import React, { useEffect, useState } from 'react';
import styles from './Description.module.css';

import desc from '../../assets/desc.png';
import { Button } from '../../components/Button/Button';
import Evaluation from '../../components/Evaluation/Evaluation';
import { useParams } from 'react-router-dom';
import recFetch from '../../axios/config';

const item = {
	quantidade: 4,
};

const Description = () => {
	const { id } = useParams();
	const [description, setDescription] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await recFetch.get(`/api/description/${id}`);
		setDescription(data.data);
		console.log(data.data);
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

					<Button text={'Adicionar essa rota'} />
				</div>
			)}
		</>
	);
};

export default Description;
