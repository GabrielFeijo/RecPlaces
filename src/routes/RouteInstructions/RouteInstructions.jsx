import React, { useEffect, useState } from 'react';

import styles from './RouteInstructions.module.css';
import { Button } from '../../components/Button/Button';
import {
	DirectionsRenderer,
	GoogleMap,
	LoadScript,
	LoadScriptNext,
} from '@react-google-maps/api';
import Step from '../../components/Step/Step';
import { Location } from 'iconsax-react';

import walking from '../../assets/walking.png';
import { ModalGeoLocation } from '../../components/Modal/Modal';

const RouteInstructions = () => {
	const [vh, setVh] = useState(window.innerHeight);
	const [steps, setSteps] = useState([]);
	const [directions, setDirections] = useState('');
	const [position, setPosition] = useState({
		lat: -3.745,
		lng: -38.523,
	});

	const customStyle = [
		{
			featureType: 'poi',
			stylers: [
				{
					visibility: 'off',
				},
			],
		},
	];

	const loadDirections = () => {
		const DirectionsService = new google.maps.DirectionsService();

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setPosition({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				DirectionsService.route(
					{
						origin: new google.maps.LatLng(
							position.coords.latitude,
							position.coords.longitude
						),
						destination: new google.maps.LatLng(-8.0622, -34.8708),
						travelMode: google.maps.TravelMode.DRIVING,
					},
					(result, status) => {
						if (status === google.maps.DirectionsStatus.OK) {
							console.log(result.routes[0].legs[0].steps);
							setSteps(result.routes[0].legs[0].steps);
							setDirections(result);
						} else {
							console.error(`error fetching directions ${result}`);
						}
					}
				);
			});
		}
	};

	useEffect(() => {
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);

	return (
		<div
			className={styles.box}
			style={{ height: vh - 120 }}
		>
			<div>
				<h1 className={styles.title}>Sua rota de hoje</h1>
				<p className={styles.destiny}>Destino: Marco Zero</p>
				{position && (
					<LoadScriptNext
						googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
					>
						<GoogleMap
							mapContainerStyle={{
								width: '400px',
								height: '400px',
								borderRadius: 16,
							}}
							center={position}
							zoom={13}
							options={{ disableDefaultUI: true, styles: customStyle }}
							onLoad={loadDirections}
						>
							<>
								{directions && <DirectionsRenderer directions={directions} />}
							</>
						</GoogleMap>
					</LoadScriptNext>
				)}
				<div className={styles.instructions}>
					{steps.length > 0 &&
						steps.map((step, index) =>
							index == 0 || index == steps.length - 1 ? (
								<Step
									icon={
										<Location
											size='24'
											color='#000'
										/>
									}
									street={step.instructions}
									index={index}
									key={index}
								/>
							) : (
								<Step
									icon={<img src={walking} />}
									street={step.instructions}
									index={index}
									key={index}
								/>
							)
						)}
				</div>
			</div>
			<Button text={'Cheguei'} />
		</div>
	);
};

export default RouteInstructions;
