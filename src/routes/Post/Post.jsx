import React, { useEffect, useState } from 'react';

import styles from './Post.module.css';
import { data } from './Data';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
const item = {
	quantidade: 4,
};
const Post = () => {
	const { id } = useParams();
	const [description, setDescription] = useState();

	const [vh, setVh] = useState(window.innerHeight);

	useEffect(() => {
		setDescription(data[id]);
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);
	return (
		<>
			{description && (
				<div
					style={{ height: vh - 120 }}
					className={styles.flex}
				>
					<div>
						<h1 className={styles.title}>{description.title}</h1>
						<div
							style={{ backgroundImage: `url(${description.img})` }}
							className={styles.background}
						/>
						<p className={styles.desc}>{description.desc}</p>
						<p className={styles.author}>Publicado por {description.author}</p>
						<p className={styles.desc_infos}>Comentáros</p>

						<div className={styles.comments}>
							<Comment item={item} />
							<Comment item={item} />
							<Comment item={item} />
							<Comment item={item} />
						</div>
					</div>
					<Button text={'Quero ir também!'} />
				</div>
			)}
		</>
	);
};

export default Post;
