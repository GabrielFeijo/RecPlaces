import React from 'react';
import styles from '../Login/Login.module.css';
import { Input } from '../../components/Button/Button';
import logo from '../../assets/logo.png';

const Cadastro = () => {
	return (
		<div className={styles.loginBox}>
			<img
				src={logo}
				alt='Logo'
				className={styles.logo}
			/>
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

			<Input
				type={'submit'}
				value={'Criar conta'}
			/>
		</div>
	);
};

export default Cadastro;
