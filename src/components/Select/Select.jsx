import React from 'react';
import styles from './Select.module.css';

export const Select = ({ type, onChange, value }) => {
	return (
		<div
			className={styles.select}
			onClick={() => onChange(type, value)}
			style={value ? { backgroundColor: '#1AA7EC', color: '#fff' } : {}}
		>
			{type}
		</div>
	);
};

export const SelectFunc = ({ type, type2, onChange, value }) => {
	return (
		<>
			<div
				className={styles.select}
				onClick={() => onChange(type, value)}
				style={value ? { backgroundColor: '#1AA7EC', color: '#fff' } : {}}
			>
				{type}
			</div>
			<div
				className={styles.select}
				onClick={() => onChange(type, value)}
				style={!value ? { backgroundColor: '#1AA7EC', color: '#fff' } : {}}
			>
				{type2}
			</div>
		</>
	);
};
