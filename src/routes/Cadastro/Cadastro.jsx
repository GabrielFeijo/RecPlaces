import React from 'react';
import styles from '../Login/Login.module.css';

const Cadastro = () => {
	return (
		<div className={styles.loginBox}>
			<div>
				<h1 className={styles.titulo}>Crie sua conta</h1>
				<input
					type='text'
					placeholder='Nome completo'
					className={styles.input}
				/>
				<input
					type='text'
					placeholder='E-mail'
					className={styles.input}
				/>
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
				<input
					type='password'
					placeholder='Confirme sua senha'
					className={styles.input}
				/>
			</div>

			<input
				type='submit'
				value='Criar conta'
				className={styles.submit}
			/>
		</div>
	);
};

export default Cadastro;
