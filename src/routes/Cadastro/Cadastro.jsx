import React, { useState } from 'react';
import styles from '../Login/Login.module.css';
import { Input } from '../../components/Button/Button';
import logo from '../../assets/logo.png';
import recFetch from '../../axios/config';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
	const [cadastro, setCadastro] = useState({});
	const [error, setError] = useState('');
	const navigate = useNavigate();
	function handleChange(e) {
		setCadastro({ ...cadastro, [e.target.name]: e.target.value });
	}

	const register = async (e) => {
		e.preventDefault();
		if (cadastro.nome && cadastro.email && cadastro.senha && cadastro.rsenha) {
			if (cadastro.senha === cadastro.rsenha) {
				const post = {
					nome: cadastro.nome,
					email: cadastro.email,
					senha: cadastro.senha,
					role: ['user'],
				};

				try {
					await recFetch.post(`/api/createUser`, post);
					const login = await recFetch.post(
						`/api/auth`,
						JSON.stringify({
							email: cadastro.email,
							senha: cadastro.senha,
						})
					);
					saveData(login.data.result);
					navigate('/home');
				} catch (error) {
					setError('Algo deu errrado!');
					setTimeout(() => {
						setError('');
					}, 2500);
				}
			} else {
				setError('As senhas não coincidem');
				setTimeout(() => {
					setError('');
				}, 2500);
			}
		} else {
			setError('Preencha todas as informções');
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
			<form onSubmit={register}>
				<div>
					<h1 className={styles.titulo}>Crie sua conta</h1>

					<input
						type='text'
						placeholder='Nome completo'
						className={styles.input}
						name='nome'
						onChange={handleChange}
						value={cadastro.nome ? cadastro.nome : ''}
					/>
					<input
						type='text'
						placeholder='E-mail'
						className={styles.input}
						name='email'
						onChange={handleChange}
						value={cadastro.email ? cadastro.email : ''}
					/>
					<input
						type='password'
						placeholder='Senha'
						className={styles.input}
						name='senha'
						onChange={handleChange}
						value={cadastro.senha ? cadastro.senha : ''}
					/>
					<input
						type='password'
						placeholder='Confirme sua senha'
						className={styles.input}
						name='rsenha'
						onChange={handleChange}
						value={cadastro.rsenha ? cadastro.rsenha : ''}
					/>
					{error !== '' ? <p className={styles.error}>{error}</p> : ''}
				</div>

				<Input
					type={'submit'}
					value={'Criar conta'}
				/>
			</form>
		</div>
	);
};

export default Cadastro;
