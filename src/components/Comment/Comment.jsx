import React from 'react';

import styles from './Comment.module.css';
import { AiFillStar } from 'react-icons/ai';

const Comment = ({ item }) => {
	return (
		<div className={styles.box}>
			<h3 className={styles.name}>Fulano de tal</h3>
			<p>Massa demais o evento, estou presente também! 😍</p>
		</div>
	);
};

export default Comment;
