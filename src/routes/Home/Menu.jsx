import Proximo from '../../assets/proximo.png';
import Eventos from '../../assets/eventos.png';
import Route from '../../assets/route.png';
import Monumentos from '../../assets/monumentos.png';

export const itens = [
	{
		index: 0,
		img: Proximo,
		title: 'Mapa Interativo',
		desc: 'Dá uma olhada em uns locais massas perto de tu',
		navigate: '/interactivemap',
	},
	{
		index: 1,
		img: Proximo,
		title: 'Feed',
		desc: 'Dá uma olhada em uns locais massas perto de tu',
		navigate: '/feed',
	},
	{
		index: 2,
		img: Proximo,
		title: 'Próximo de mim',
		desc: 'Dá uma olhada em uns locais massas perto de tu',
		navigate: '/events/proximos',
	},
	{
		index: 3,
		img: Route,
		title: 'Faz tua rota',
		desc: 'Diz quanto tu tem, que a gente te diz onde ir',
		navigate: '/createroute',
	},

	{
		index: 4,
		img: Eventos,
		title: 'Eventos',
		desc: 'Fica por dentro dos eventos que tão rolando pela cidade',
		navigate: '/events/cidade',
	},
	{
		index: 5,
		img: Monumentos,
		title: 'Todos',
		desc: 'A gente te diz onde encontrar monumentos incríveis da cidade',
		navigate: '/events/todos',
	},
];
