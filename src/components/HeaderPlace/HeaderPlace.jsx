import React from 'react';
import styles from './HeaderPlace.module.css';
import { SearchNormal1 } from 'iconsax-react';

const HeaderPlace = ({ title, placeholder, value, onChange }) => {
	return (
		<div>
			<h1 className={styles.title}>{title} </h1>
			<div className={styles.search}>
				<input
					type='text'
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e)}
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
