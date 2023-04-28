import React from 'react';

import styles from './Rotas.module.css';
import { CloseCircle } from 'iconsax-react';
import { Button, Button2 } from '../../components/Button/Button';

const Rotas = () => {
	return (
		<div className={styles.wrap}>
			<div>
				<h1 className={styles.titulo}>Seus roteiros de hoje</h1>
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Rotas adicionadas</p>
					<div className={styles.flex_place}>
						<p>
							Bodega do Véio, R. Mariz e Barros, 328 - Recife, PE, 50030-120{' '}
						</p>
						<CloseCircle
							size='20'
							color='rgba(0, 0, 0, 0.7)'
						/>
					</div>
				</div>
			</div>

			<div>
				<Button text={'Confirmar rotas'} />
				<Button2 text={'Confirmar rotas'} />
			</div>
		</div>
	);
};

export default Rotas;
