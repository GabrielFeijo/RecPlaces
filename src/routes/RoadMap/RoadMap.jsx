import React, { useEffect, useState } from 'react';

import styles from './RoadMap.module.css';
import { Button, Button2 } from '../../components/Button/Button';
import RouteCard from '../../components/RouteCard/RouteCard';
import { CloseCircle } from 'iconsax-react';

const RoadMap = () => {
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
			className={styles.wrap}
			style={{ minHeight: vh - 120 }}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>Seus roteiros de hoje</h1>
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Primeira rota sugerida:</p>

					<RouteCard
						text={
							'Bodega do Véio, R. Mariz e Barros, 328 - Recife, PE, 50030-120'
						}
					/>
					<RouteCard
						text={
							'Bodega do Véio, R. Mariz e Barros, 328 - Recife, PE, 50030-120'
						}
					/>
					<RouteCard
						text={
							'Bodega do Véio, R. Mariz e Barros, 328 - Recife, PE, 50030-120'
						}
					/>
				</div>
			</div>

			<div className={styles.btn_box}>
				<Button text={'Confirmar rotas'} />
				<Button2 text={'Adicionar mais rotas'} />
			</div>
		</div>
	);
};

export default RoadMap;
