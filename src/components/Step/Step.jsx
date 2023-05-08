import React from 'react';

import styles from './Step.module.css';

import parse from 'html-react-parser';

const Step = ({ icon, street }) => {
	return (
		<div className={styles.flex}>
			{icon}
			<div>{parse(street)}</div>
		</div>
	);
};

export default Step;
