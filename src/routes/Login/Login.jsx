import React from 'react';
import styles from './Login.module.css';
import { Input } from '../../components/Button/Button';

const Login = () => {
	return (
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
			/>
		</div>
	);
};

export default Login;
