import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Input } from '../../components/Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Login = () => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const acess = () => {
		navigate('/home');
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4500);
	}, []);
	return (
		<>
			{loading && <Loading />}
			<div className={styles.loginBox}>
				<div>
					<h1 className={styles.titulo}>Login</h1>

					<input
						type='email'
						placeholder='E-mail'
						className={styles.input}
					/>
					<input
						type='password'
						placeholder='Senha'
						className={styles.input}
					/>
				</div>

				<Input
					type={'submit'}
					value={'Entrar'}
					event={acess}
				/>
			</div>
		</>
	);
};

export default Login;
