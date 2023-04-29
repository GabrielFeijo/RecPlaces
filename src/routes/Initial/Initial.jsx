import React, { useEffect, useState } from 'react';
import initial from '../../assets/initial.png';

import styles from './Initial.module.css';
import Loading from '../../components/Loading/Loading';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4500);
	}, []);
	return (
		<>
			{loading && <Loading />}
			<div className={styles.flex}>
				<img
					src={initial}
					alt='Logo'
				/>
				<div className={styles.btn}>
					<Button
						text={'Entrar'}
						event={() => navigate('/login')}
					/>

					<Button
						text={'Cadastrar'}
						className={styles.register}
						event={() => navigate('/register')}
					/>
				</div>
			</div>
		</>
	);
};

export default Initial;
