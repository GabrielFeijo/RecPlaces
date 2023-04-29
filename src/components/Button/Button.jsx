import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text, event }) => {
	return (
		<button
			className={styles.btn}
			onClick={event}
		>
			{text}
		</button>
	);
};

export const Button2 = ({ text, event }) => {
	return (
		<button
			className={styles.btn2}
			onClick={event}
		>
			{text}
		</button>
	);
};

export const Input = ({ type, value, event }) => {
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
			onClick={event}
		/>
	);
};
