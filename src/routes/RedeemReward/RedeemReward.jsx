import React, { useEffect, useState } from 'react';

import styles from './RedeemReward.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import chicoin from '../../assets/chicoin.png';

const RedeemReward = () => {
	const navigate = useNavigate();
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
			<h1 className={styles.title}>Sua recompensa</h1>

			<p className={styles.description}>
				Eba! Agora é só se dirigir a Bodega do Véio e mostrar o código a seguir
				para resgatar sua recompensa
			</p>
			<h2 className={styles.code}>Código de resgate: 8F99TF</h2>
			<p className={styles.address}>
				Bodega do Véio, R. Mariz e Barros, 328 - Recife, PE, 50030-120
			</p>

			<div className={styles.coins}>
				<p>Você tem 100 Chicoins</p>
				<img
					src={chicoin}
					alt='Chicoin'
				/>
			</div>
			<div style={{ margin: '2em 0' }}>
				<Button
					text={'Página inicial'}
					event={() => navigate('/home')}
				/>
			</div>
		</div>
	);
};

export default RedeemReward;
