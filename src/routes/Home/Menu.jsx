import Proximo from '../../assets/proximo.png';
import Eventos from '../../assets/eventos.png';
import Route from '../../assets/route.png';
import Monumentos from '../../assets/monumentos.png';

export const itens = [
	{
		index: 0,
		img: Proximo,
		title: 'Próximo de mim',
		desc: 'Dá uma olhada em uns locais massas perto de tu',
		navigate: '/proximos',
	},
	{
		index: 1,
		img: Route,
		title: 'Faz tua rota',
		desc: 'Diz quanto tu tem, que a gente te diz onde ir',
		navigate: '/makeroute',
	},

	{
		index: 2,
		img: Eventos,
		title: 'Eventos',
		desc: 'Fica por dentro dos eventos que tão rolando pela cidade',
		navigate: '/eventos',
	},
	{
		index: 3,
		img: Monumentos,
		title: 'Todos',
		desc: 'A gente te diz onde encontrar monumentos incríveis da cidade',
		navigate: '/todos',
	},
];
