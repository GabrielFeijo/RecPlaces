import React, { useEffect, useState } from 'react';
import styles from './Points.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Points = () => {
	const [vh, setVh] = useState(window.innerHeight);

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	const navigate = useNavigate();

	return (
		<div
			className={styles.flex}
			style={{ height: vh - 120 }}
		>
			<div>
				<h1 className={styles.title}>Ganhes pontos!</h1>
				<p>
					Faça check-in utilizando sua conta, some pontos e troque por
					premiações em estabelecimentos do Recife antigo!
				</p>
				<p className={styles.margin}>Para ganhar os pontos é fácil:</p>
				<ol>
					<li>
						Faça <span className={styles.color}>login</span> no RecPlaces
					</li>
					<li>Clique em Ganhe Pontos!</li>
					<li>
						Na tela Ganhe Pontos, faça{' '}
						<span className={styles.color}>check-in</span> com a sua
						localização, ganhe seus pontos!
					</li>
				</ol>
				<p className={styles.margin}>
					Mas lembre-se, você só pode fazer check-in em cada local 1 vez por
					semana!
				</p>
			</div>
			<Button
				text={'Fazer check-in'}
				event={() => navigate('/history')}
			/>
		</div>
	);
};

export default Points;
