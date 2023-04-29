import React from 'react';
import styles from './Select.module.css';

const Select = ({ type }) => {
	return <div className={styles.select}>{type}</div>;
};

export default Select;
