import React from 'react';
import styles from './Card.module.css';

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
