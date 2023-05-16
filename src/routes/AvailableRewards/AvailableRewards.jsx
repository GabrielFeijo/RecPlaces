import React from 'react';

import chicoin from '../../assets/chicoin.png';
import styles from './AvailableRewards.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RewardCard } from '../../components/Card/Card';

const rewards = [
	{ id: 0, name: '4 Cervejas na Bodega do Véio', price: 50 },
	{ id: 1, name: 'Boné Recife', price: 150 },
	{ id: 2, name: 'Caneca Mamulengo', price: 250 },
	{ id: 3, name: 'Caneca da Loja Tal', price: 350 },
];

const AvailableRewards = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className={styles.coins}>
				<p>Você tem 150 Chicoins</p>
				<img
					src={chicoin}
					alt='Chicoin'
				/>
			</div>
			<h2 className={styles.sub_rewards}>Troque seus Chicoins por prêmios!</h2>
			{rewards.map((reward) => (
				<RewardCard
					reward={reward}
					key={reward.id}
				/>
			))}

			<div style={{ margin: '2em 0' }}>
				<Button
					text={'Fazer novo check-in'}
					event={() => navigate('/checkin')}
				/>
			</div>
		</div>
	);
};

export default AvailableRewards;
