import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import Input from '../../components/Input/Input';
import ProfileCircle from '../../assets/profilecircle.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const [vh, setVh] = useState(window.innerHeight);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate('/login');
	};

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	return (
		<div style={{ height: vh - 120 }}>
			<h1 className={styles.title}>Meu perfil</h1>
			<div className={styles.flex}>
				<img
					src={ProfileCircle}
					alt='ProfileCircle'
				/>
				<div className={styles.edit}>
					<Input
						placeholder={'Nome'}
						type={'text'}
						name={'name'}
					/>
					<Input
						placeholder={'Email'}
						type={'text'}
						name={'email'}
					/>
					<Input
						placeholder={'Senha'}
						type={'text'}
						name={'senha'}
					/>
					<Input
						placeholder={'Outro teste'}
						type={'text'}
						name={'other'}
					/>
				</div>
				<p
					className={styles.logout}
					onClick={logout}
				>
					Sair da minha conta
				</p>
			</div>
		</div>
	);
};

export default Profile;
