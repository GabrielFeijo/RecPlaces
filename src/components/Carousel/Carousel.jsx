import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Points from '../Points/Points';

import points from '../../assets/carousel/points.png';
import city from '../../assets/carousel/city.png';
import calendar from '../../assets/carousel/calendar.png';
import feed from '../../assets/carousel/feed.png';

export function CarouselInfo(props) {
	var items = [
		<Points
			title={'Ganhe pontos!'}
			description={
				'Ganhe pontos visitando o Recife Antigo, e troque por cupons!'
			}
			key={0}
			route={'/points'}
			img={points}
		/>,
		<Points
			title={'A cidade só cresce!!'}
			description={'Ajude o Recife a ficar de cada vez mais linda!'}
			key={1}
			route={'/home'}
			img={city}
		/>,
		<Points
			title={'Agenda da semana'}
			description={'Fica ligado nos eventos do Recife essa semana!'}
			key={2}
			route={'/home'}
			img={calendar}
		/>,
		<Points
			title={'Feed'}
			description={'Cheque o que tá rolando agora no Recife Antigo!'}
			key={3}
			route={'/home'}
			img={feed}
		/>,
	];

	return (
		<Carousel
			navButtonsAlwaysInvisible={true}
			animation={'slide'}
			interval={8000}
			indicatorIconButtonProps={{
				style: {
					color: '#D9D9D9',
				},
			}}
			activeIndicatorIconButtonProps={{
				style: {
					color: '#1AA7EC',
				},
			}}
			sx={{
				marginBottom: 1,
			}}
		>
			{items.map((item, i) => item)}
		</Carousel>
	);
}
