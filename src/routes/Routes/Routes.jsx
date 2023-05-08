import React, { useEffect, useState } from 'react';

import styles from './Routes.module.css';
import { CloseCircle } from 'iconsax-react';
import { Button, Button2 } from '../../components/Button/Button';
import RouteAddress from '../../components/RouteAddress/RouteAddress';
import { useLocation, useNavigate } from 'react-router-dom';

const Routes = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [addedRoutes, setAddedRoutes] = useState([]);

	useEffect(() => {
		if (location.state != null) {
			setAddedRoutes(location.state.routes);
		}
	}, []);

	const filter = (id) => {
		setAddedRoutes(addedRoutes.filter((route) => route.id !== id));
	};

	return (
		<div className={styles.wrap}>
			<div>
				<h1 className={styles.title}>Seu roteiro de hoje</h1>
				<div className={styles.box_shadow}>
					<p className={styles.routes}>Rotas adicionadas</p>
					{addedRoutes.length > 0 ? (
						addedRoutes.map((route) => (
							<RouteAddress
								address={route.address}
								key={route.id}
								handleClick={() => filter(route.id)}
							/>
						))
					) : (
						<p className={styles.not_found}>Nenhuma rota adicionada! :(</p>
					)}
				</div>
			</div>

			<div className={styles.btn_box}>
				<Button
					text={'Confirmar rotas'}
					event={() => navigate('/routeinstructions')}
				/>
				<Button2
					text={'Adicionar mais rotas'}
					event={() =>
						navigate('/events/todos', {
							state: { routes: addedRoutes },
						})
					}
				/>
			</div>
		</div>
	);
};

export default Routes;
