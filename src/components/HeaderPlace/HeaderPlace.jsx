import React from 'react';
import styles from './HeaderPlace.module.css';
import { SearchNormal1 } from 'iconsax-react';

const HeaderPlace = ({ title, placeholder }) => {
	return (
		<div>
			<h1 className={styles.titulo}>{title} </h1>
			<div className={styles.search}>
				<input
					type='text'
					placeholder={placeholder}
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
