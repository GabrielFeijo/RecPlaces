import React from 'react';
import { Card, PostCard } from '../../components/Card/Card';

import styles from './Feed.module.css';
import { posts } from './Posts';

const Feed = () => {
	return (
		<>
			<h1 className={styles.title}>Feed</h1>
			<div className={styles.flex}>
				{posts.map((post) => (
					<PostCard
						post={post}
						key={post.index}
					/>
				))}
			</div>
		</>
	);
};

export default Feed;
