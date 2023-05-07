import React, { useEffect, useState } from 'react';
import styles from '../Login/Login.module.css';
import { Input } from '../../components/Button/Button';
import logo from '../../assets/logo.png';
import recFetch from '../../axios/config';
import { useNavigate } from 'react-router-dom';
import { LoadingRequest } from '../../components/Loading/Loading';

const Register = () => {
	const [vh, setVh] = useState(window.innerHeight);
	const [loading, setLoading] = useState(false);
	const [cadastro, setCadastro] = useState({});
	const [error, setError] = useState('');
	const navigate = useNavigate();
	function handleChange(e) {
		setCadastro({ ...cadastro, [e.target.name]: e.target.value });
	}

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	const register = async (e) => {
		e.preventDefault();
		if (cadastro.nome && cadastro.email && cadastro.senha && cadastro.rsenha) {
			if (cadastro.senha === cadastro.rsenha) {
				setLoading(true);

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
					setLoading(false);
				} catch (error) {
					setLoading(false);

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
		<>
			{loading && <LoadingRequest />}
			<form
				className={styles.loginBox}
				style={{ height: vh }}
				onSubmit={register}
			>
				<div>
					<img
						src={logo}
						alt='Logo'
						className={styles.logo}
					/>
					<h1 className={styles.title}>Crie sua conta</h1>

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

				<div style={{ marginBottom: 30, width: '100%' }}>
					<Input
						type={'submit'}
						value={'Criar conta'}
					/>
				</div>
			</form>
		</>
	);
};

export default Register;
