import React from 'react';

import chicoin from '../../assets/chicoin.png';
import styles from './HistoryPoints.module.css';
import Local from '../../components/Local/Local';

const historico = [
	{ data: '8 de abril', local: 'Paço do Frevo', pontos: 12 },
	{ data: '8 de abril', local: 'Bodega do Véio', pontos: 15 },
	{ data: '8 de abril', local: 'Rua do Boticário', pontos: 8 },
];

const HistoryPoints = () => {
	return (
		<div>
			<div className={styles.coins}>
				<h1>Você tem 150 Chicoins</h1>
				<img
					src={chicoin}
					alt='Chicoin'
				/>
			</div>
			<h2 className={styles.sub_recompensas}>Recompensas possíveis</h2>
			<div className={styles.coins}>
				<div className={styles.recompensa}>
					<p className={styles.name}>Caneca da Loja Tal</p>
					<h2>50 Chicoins</h2>
				</div>
				<img
					src={chicoin}
					alt='Chicoin'
				/>
			</div>
			<h2 className={styles.subtitulo}>Seu histórico de pontos</h2>

			{historico.map((local) => (
				<Local
					data={local.data}
					local={local.local}
					pontos={local.pontos}
				/>
			))}
		</div>
	);
};

export default HistoryPoints;
