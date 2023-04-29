import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Input } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import recFetch from '../../axios/config';

const Login = () => {
	const navigate = useNavigate();

	const [login, setLogin] = useState({});
	const [error, setError] = useState('');
	function handleChange(e) {
		setLogin({ ...login, [e.target.name]: e.target.value });
	}
	const auth = async () => {
		if (login.email && login.senha) {
			try {
				const loginBD = await recFetch.post(
					`/api/auth`,
					JSON.stringify({
						email: login.email,
						senha: login.senha,
					})
				);
				console.log(loginBD);
				saveData(loginBD.data.result);
				navigate('/home');
			} catch (error) {
				setError('Algo deu errado!');
				setTimeout(() => {
					setError('');
				}, 2500);
			}
		} else {
			setError('Preecnha todas as informações!');
			setTimeout(() => {
				setError('');
			}, 2500);
		}
	};
	const saveData = (value) => {
		try {
			const jsonValue = JSON.stringify(value);
			localStorage.setItem('token_user', jsonValue);
		} catch (e) {
			// saving error
		}
	};
	return (
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
					name='email'
					onChange={handleChange}
					value={login.email ? login.email : ''}
				/>
				<input
					type='password'
					placeholder='Senha'
					className={styles.input}
					name='senha'
					onChange={handleChange}
					value={login.senha ? login.senha : ''}
				/>
				{error !== '' ? <p className={styles.error}>{error}</p> : ''}
			</div>
			<Input
				type={'submit'}
				value={'Entrar'}
				event={auth}
			/>
		</div>
	);
};

export default Login;
