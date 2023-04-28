import React from 'react';
import styles from './Login.module.css';

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

			<input
				type='submit'
				value='Entrar'
				className={styles.submit}
			/>
		</div>
	);
};

export default Login;
