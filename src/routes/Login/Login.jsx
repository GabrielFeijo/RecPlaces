import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Input } from '../../components/Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Login = () => {
	const navigate = useNavigate();
	const acess = () => {
		navigate('/home');
	};

	return (
		<>
			<div className={styles.loginBox}>
				<img
					src={logo}
					alt='Logo'
					className={styles.logo}
				/>
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
