import React, { useEffect, useState } from 'react';

import styles from './ChosenReward.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { RewardCard } from '../../components/Card/Card';
import rewardImage from '../../assets/reward.png';

const rewards = [
	{ id: 0, name: '4 Cervejas na Bodega do Véio', price: 50 },
	{ id: 1, name: 'Boné Recife', price: 150 },
	{ id: 2, name: 'Caneca Mamulengo', price: 250 },
	{ id: 3, name: 'Caneca da Loja Tal', price: 350 },
];

const ChosenReward = (props) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [reward, setReward] = useState(rewards[id]);
	const [vh, setVh] = useState(window.innerHeight);

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	return (
		<div
			style={{ height: vh - 80 }}
			className={styles.box}
		>
			<h1 className={styles.title}>Recompensa escolhida</h1>

			<RewardCard reward={reward} />

			<div
				className={styles.bg_img}
				style={{ backgroundImage: `url(${rewardImage})` }}
			></div>

			<p className={styles.description}>
				Lembre-se: para resgatar a recompensa, dirija-se ao estabelecimento e
				apresente o código que vamos te passar
			</p>

			<div style={{ margin: '2em 0' }}>
				<Button
					text={'Pegar essa recompensa'}
					event={() => navigate('/redeemreward')}
				/>
			</div>
		</div>
	);
};

export default ChosenReward;
