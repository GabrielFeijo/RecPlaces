import React from 'react';
import styles from './Input.module.css';
import { Edit2 } from 'iconsax-react';

const Input = ({ type, name, placeholder, handleOnChange, value }) => {
	return (
		<div className={styles.box}>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				id={name}
				onChange={handleOnChange}
				value={value}
				className={styles.input}
			/>
			<Edit2
				size='24'
				color='rgba(0, 0, 0, 0.7'
				className={styles.icon}
			/>
		</div>
	);
};

export default Input;
