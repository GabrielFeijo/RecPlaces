import React from 'react';
import Card from '../../components/Card/Card';

import styles from './Home.module.css';
import { itens } from './Menu';
import Loading from '../../components/Loading/Loading';
import Points from '../../components/Points/Points';

const Home = () => {
	return (
		<>
			<Points />
			<div className={styles.flex}>
				{itens.map((item) => (
					<Card
						item={item}
						key={item.index}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
