import React from 'react';
import { Card } from '../../components/Card/Card';

import styles from './Home.module.css';
import { itens } from './Menu';
import Points from '../../components/Points/Points';
import { CarouselInfo } from '../../components/Carousel/Carousel';

const Home = () => {
	return (
		<>
			<CarouselInfo />
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
