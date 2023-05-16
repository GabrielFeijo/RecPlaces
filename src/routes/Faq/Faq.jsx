import React, { useEffect, useState } from 'react';
import styles from './Faq.module.css';
import { FaqCard } from '../../components/Card/Card';

const Faq = () => {
	const [vh, setVh] = useState(window.innerHeight);

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	return (
		<div style={{ height: vh - 120 }}>
			<h1 className={styles.title}>Perguntas frequentes</h1>

			<FaqCard />
			<FaqCard />
			<FaqCard />
			<FaqCard />
			<FaqCard />
			<FaqCard />
		</div>
	);
};

export default Faq;
