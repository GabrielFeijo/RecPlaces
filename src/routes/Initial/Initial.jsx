import React, { useEffect, useState } from 'react';
import initial from '../../assets/initial.png';

import styles from './Initial.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';

const Initial = () => {
	const [loading, setLoading] = useState(true);
	const [vh, setVh] = useState(window.innerHeight);

	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4500);

		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	return (
		<>
			{loading && <Loading />}
			<div
				className={styles.flex}
				style={{ height: vh }}
			>
				<img
					src={initial}
					alt='Logo'
				/>
				<div className={styles.btn}>
					<div className={styles.button}>
						<div className={styles.line}></div>
						<p>Já tenho uma conta</p>
					</div>
					<Button
						text={'Entrar'}
						event={() => navigate('/login')}
					/>

					<div className={styles.button}>
						<div className={styles.line}></div>
						<p>Ainda não tenho conta</p>
					</div>
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
