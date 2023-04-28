import React from 'react';
import styles from './HeaderPlace.module.css';
import { SearchNormal1 } from 'iconsax-react';

const HeaderPlace = () => {
	return (
		<div>
			<h1 className={styles.titulo}>Eventos </h1>
			<div className={styles.search}>
				<input
					type='text'
					placeholder='Onde você quer ir?'
				/>
				<SearchNormal1
					size='20'
					color='
                    rgba(0, 0, 0, 0.57)'
				/>
			</div>
		</div>
	);
};

export default HeaderPlace;
