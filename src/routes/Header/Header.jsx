import React from 'react';

import styles from './Header.module.css';
import { ArrowRight2, HambergerMenu, ProfileCircle } from 'iconsax-react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	

	const openNav = () => {
		document.querySelector('#mySidebar').style.width = '250px';
	};

	const closeNav = () => {
		document.querySelector('#mySidebar').style.width = '0';
	};
	return (
		<>
			<div
				id='mySidebar'
				className={styles.sidebar}
			>
				<a
					className={styles.closebtn}
					onClick={closeNav}
				>
					×
				</a>
				<div className={styles.option}>
					<p>Minhas Chicoins</p>{' '}
					<ArrowRight2
						size='16'
						color='#1aa7ec'
						variant='Bold'
					/>
				</div>
				<div className={styles.option}>
					<p>Ajuda</p>
					<ArrowRight2
						size='16'
						color='#1aa7ec'
						variant='Bold'
					/>
				</div>
				<div className={styles.option}>
					<p>Perguntas frequentes</p>
					<ArrowRight2
						size='16'
						color='#1aa7ec'
						variant='Bold'
					/>
				</div>
				<div className={styles.option}>
					<p>Configurações</p>
					<ArrowRight2
						size='16'
						color='#1aa7ec'
						variant='Bold'
					/>
				</div>
				<div className={styles.option}>
					<p>Sobre o RecPlaces</p>
					<ArrowRight2
						size='16'
						color='#1aa7ec'
						variant='Bold'
					/>
				</div>
			</div>
			<div className={styles.box}>
				<HambergerMenu
					size='32'
					color='#000000'
					onClick={openNav}
				/>
				<img
					src={logo}
					alt='Logo'
				/>
				<ProfileCircle
					size='32'
					color='#000000'
					onClick={() => navigate('/profile')}
				/>
			</div>
		</>
	);
};

export default Header;
