import Post1 from '../../assets/posts/post1.png';
import Post2 from '../../assets/posts/post2.png';
import Post3 from '../../assets/posts/post3.png';
import Post4 from '../../assets/posts/post4.png';

export const posts = [
	{
		index: 0,
		img: Post1,
		title: 'Maracatu',
		desc: 'Tá tendo Maracatu aqui na Rua da Moeda!',
		navigate: '/post/0',
		distance: 1.3,
	},
	{
		index: 1,
		img: Post2,
		title: 'Pagode do Didi',
		desc: 'Aqui no Pagode do Didi já já vai começar um pagode dos bons!!!',
		navigate: '/post/1',
		distance: 1.3,
	},

	{
		index: 2,
		img: Post3,
		title: 'Frevo',
		desc: 'Tá tendo apresentação de Frevo aqui no Marco Zero!',
		navigate: '/post/2',
		distance: 2.7,
	},
	{
		index: 3,
		img: Post4,
		title: 'Catamarã',
		desc: 'Passeio do Catamarã hoje tá com um desconto massa!!!',
		navigate: '/post/3',
		distance: 1.8,
	},
];
