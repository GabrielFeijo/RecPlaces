import React from 'react';

import styles from './Sucess.module.css';
import completed from '../../assets/completed.png';
import coin from '../../assets/coin.png';
import { Button } from '../../components/Button/Button';

const Sucess = () => {
	return (
		<div className={styles.flex}>
			<img
				src={completed}
				alt='ChekIn Completo'
				className={styles.check}
			/>
			<div className={styles.infos}>
				<p>Check-in concluído com sucesso!</p>
				<div className={styles.coins}>
					<p>Chicoins recebidas</p>{' '}
					<p>
						17{' '}
						<img
							src={coin}
							alt='Chicoins
                                            '
						/>
					</p>
				</div>
			</div>
			<Button text={'Home'} />
		</div>
	);
};

export default Sucess;
