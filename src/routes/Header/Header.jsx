import React from 'react';

import styles from './Header.module.css';
import { HambergerMenu, ProfileCircle } from 'iconsax-react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate('/login');
	};
	return (
		<div className={styles.box}>
			<HambergerMenu
				size='32'
				color='#000000'
			/>
			<img
				src={logo}
				alt='Logo'
			/>
			<ProfileCircle
				size='32'
				color='#000000'
				onClick={logout}
			/>
		</div>
	);
};

export default Header;
