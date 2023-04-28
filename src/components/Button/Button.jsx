import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text }) => {
	return <button className={styles.btn}>{text}</button>;
};

export const Input = ({ type, value }) => {
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
		/>
	);
};
