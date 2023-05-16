import React from 'react';
import styles from './Card.module.css';
import { AiFillStar } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowDown2 } from 'iconsax-react';

import chicoin from '../../assets/chicoin.png';

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

export const EvaluationCard = ({ item }) => {
	const navigate = useNavigate();
	const location = useLocation();

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
			onClick={() =>
				navigate('/description/' + item._id, {
					state: {
						routes: location.state != null ? location.state.routes : [],
					},
				})
			}
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

export const LocationCard = ({ item, selected, value }) => {
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

export const PostCard = ({ post }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.box}
			onClick={() => {
				navigate(post.navigate);
			}}
		>
			<img
				src={post.img}
				alt={post.title}
				className={styles.img}
			/>
			<h2 className={styles.title}>{post.title}</h2>
			<p className={styles.desc}>{post.desc}</p>
			<p className={styles.distance}>{post.distance} km</p>
		</div>
	);
};

export const FaqCard = ({ question }) => {
	return (
		<div className={styles.card}>
			<h2 className={styles.title}>Lorem ipsum dolor?</h2>
			<ArrowDown2
				size='24'
				color='#286181'
			/>
		</div>
	);
};

export const RewardCard = ({ reward }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.coins}
			onClick={() => navigate(`/rewards/${reward.id}`)}
		>
			<div className={styles.reward}>
				<p className={styles.name}>{reward.name}</p>
				<p className={styles.price}>Custa {reward.price} Chicoins</p>
			</div>
			<img
				src={chicoin}
				alt='Chicoin'
			/>
		</div>
	);
};
