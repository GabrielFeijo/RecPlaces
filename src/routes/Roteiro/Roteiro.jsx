import React from 'react';

import styles from './Roteiro.module.css';
import { CloseCircle } from 'iconsax-react';
import { Button, Button2 } from '../../components/Button/Button';

const Roteiro = () => {
	return (
		<div className={styles.wrap}>
			<div>
				<h1 className={styles.titulo}>Seus roteiros de hoje</h1>
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Primeira rota sugerida:</p>
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
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Segunda rota sugerida:</p>
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
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Terceira rota sugerida:</p>
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

			<div className={styles.btn_box}>
				<Button text={'Confirmar rotas'} />
				<Button2 text={'Adicionar mais rotas'} />
			</div>
		</div>
	);
};

export default Roteiro;
