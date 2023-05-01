import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Points from '../Points/Points';

export function CarouselInfo(props) {
	var items = [
		<Points
			title={'Ganhe pontos!'}
			description={
				'Ganhe pontos visitando o Recife Antigo, e troque por cupons!'
			}
			key={0}
		/>,
		<Points
			title={'A cidade só cresce!!'}
			description={'Ajude o Recife a ficar de cada vez mais linda!'}
			key={1}
		/>,
	];

	return (
		<Carousel
			navButtonsAlwaysInvisible={true}
			animation={'slide'}
			interval={5000}
			indicatorIconButtonProps={{
				style: {
					color: '#1AA7EC',
				},
			}}
			activeIndicatorIconButtonProps={{
				style: {
					color: '#D9D9D9',
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
