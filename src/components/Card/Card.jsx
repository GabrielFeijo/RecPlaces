import React from 'react';
import styles from './Card.module.css';
import { AiFillStar } from 'react-icons/ai';

export const Card = ({ item }) => {
	return (
		<div className={styles.box}>
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
	let stars = [];
	for (let i = 0; i < item.quantidade; i++) {
		stars.push(
			<AiFillStar
				size={16}
				fill='#ffc107'
			/>
		);
	}
	return (
		<div className={styles.box}>
			<img
				src={item.img}
				alt={item.title}
				className={styles.img}
			/>
			<h2 className={styles.title}>{item.title}</h2>
			<p>{stars}</p>
			<p className={styles.desc}>{item.tipo}</p>
			<p className={styles.desc}>{item.distancia} km</p>
		</div>
	);
};
