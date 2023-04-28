import React from 'react';

import styles from './Avaliacao.module.css';
import { AiFillStar } from 'react-icons/ai';

const Avaliacao = ({ item }) => {
	let stars = [];
	for (let i = 0; i < item.quantidade; i++) {
		stars.push(
			<AiFillStar
				size={16}
				fill='#ffc107'
				key={'gg' + i}
			/>
		);
	}
	return (
		<div className={styles.box}>
			<div className={styles.flex}>
				<h3 className={styles.nome}>Fulano de tal</h3>
				<p>{stars}</p>
			</div>
			<p>Ótimo lugar para ir com a família! Amei a comidas</p>
		</div>
	);
};

export default Avaliacao;
