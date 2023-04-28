import React from 'react';
import styles from './Description.module.css';

import desc from '../../assets/desc.png';
import { Button } from '../../components/Button/Button';

const Description = () => {
	return (
		<div>
			<h1 className={styles.titulo}>Bodega do Véio</h1>
			<img
				src={desc}
				className={styles.img}
			/>
			<p className={styles.desc_infos}>(81) 9 84197937</p>
			<p className={styles.desc_infos}>
				R. Mariz e Barros, 328 - Recife, PE, 50030-120
			</p>

			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>

			<Button text={'Criar rotas'} />
		</div>
	);
};

export default Description;
