import axios from 'axios';

const recFetch = axios.create({
	baseURL: 'https://api-rec-places.vercel.app',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default recFetch;
