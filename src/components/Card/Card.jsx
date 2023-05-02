import React from 'react';
import styles from './Card.module.css';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const Card = ({ item }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.box}
			onClick={() => {
				navigate(item.navigate);
			}}
		>
			<img
				src={item.img}
				alt={item.title}
				className={styles.img}
			/>
			<h2 className={styles.title}>{item.title}</h2>
			<p className={styles.desc}>{item.desc}</p>
		</div>
	);
};

export const CardStar = ({ item }) => {
	const navigate = useNavigate();
	let stars = [];
	for (let i = 0; i < item.stars; i++) {
		stars.push(
			<AiFillStar
				size={16}
				fill='#ffc107'
				key={'gg' + i}
			/>
		);
	}
	return (
		<div
			className={styles.box}
			onClick={() => navigate('/description/' + item._id)}
		>
			<div
				style={{ backgroundImage: `url(${item.img})` }}
				className={styles.background}
			/>
			<h2 className={styles.title}>{item.nome}</h2>
			<p>{stars}</p>
			<p className={styles.desc}>{item.tipo}</p>
			<p className={styles.desc}>{item.distancia} km</p>
		</div>
	);
};

export const CardLocal = ({ item, selected, value }) => {
	let stars = [];
	for (let i = 0; i < item.stars; i++) {
		stars.push(
			<AiFillStar
				size={16}
				fill='#ffc107'
				key={'gg' + i}
			/>
		);
	}
	return (
		<div
			className={styles.box}
			onClick={selected}
			style={value ? { backgroundColor: '#1AA7EC', color: 'white' } : {}}
		>
			<div
				style={{ backgroundImage: `url(${item.img})` }}
				className={styles.background}
			/>
			<h2 className={styles.title}>{item.nome}</h2>
			<p>{stars}</p>
			<p className={styles.desc}>{item.tipo}</p>
		</div>
	);
};
