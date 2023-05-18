import React, { useEffect, useState } from 'react';
import styles from './InteractiveMap.module.css';
import {
	GoogleMap,
	LoadScript,
	LoadScriptNext,
	Marker,
} from '@react-google-maps/api';

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

const InteractiveMap = () => {
	const [position, setPosition] = useState({
		lat: -8.0663201,
		lng: -34.9150397,
	});

	const [vh, setVh] = useState(window.innerHeight);
	const [markers, setMarkers] = useState(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
		const updateVh = () => {
			setVh(window.innerHeight);
		};

		window.addEventListener('resize', updateVh);

		return () => window.removeEventListener('resize', updateVh);
	}, []);
	const onLoad = (map) => {
		setTimeout(() => {
			setMarkers(true);
		}, 500);

		map.addListener('zoom_changed', () => {
			if (map.zoom <= 10) {
				setMarkers(false);
			} else {
				!markers && setMarkers(true);
			}
		});
	};

	return (
		<>
			<h1 className={styles.title}>Mapa Vivo</h1>
			{position && (
				<LoadScriptNext googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
					<GoogleMap
						mapContainerStyle={{
							width: '400px',
							height: vh - 200,
							borderRadius: 16,
						}}
						center={position}
						zoom={13}
						options={{ disableDefaultUI: true, styles: customStyle }}
						onLoad={onLoad}
					>
						{markers && (
							<>
								<Marker
									position={position}
									label={{ text: 'Sua localização', className: styles.point }}
								/>

								<Marker
									icon={{
										url: 'https://www.carnaxe.com.br/a/emocticons/emoticons_carnaval_88.gif',
										scaledSize: { width: 110, height: 110 },
									}}
									position={{ lat: position.lat + 0.005, lng: position.lng }}
									label={{ text: 'Frevo', className: styles.point }}
								/>

								<Marker
									icon={{
										url: 'https://media3.giphy.com/media/RJmseVPqTzzeCtPOJN/giphy.gif?cid=6c09b952uaa6m3bqdam6ra4gc6wcd3lkg3f8ajjqhox5p7tu&rid=giphy.gif&ct=s',
										scaledSize: { width: 50, height: 80 },
									}}
									position={{ lat: position.lat, lng: position.lng + 0.02 }}
									label={{
										text: 'Samba',
										className: styles.point,
									}}
								/>
								<Marker
									icon={{
										url: 'https://media0.giphy.com/media/hWdpNN0WVZi6erabrI/giphy.gif?cid=6c09b9524i4ntrprry9726nfb7wla6ueq9ly8xsi4kfh52ys&rid=giphy.gif&ct=s',
										scaledSize: { width: 50, height: 50 },
									}}
									position={{ lat: position.lat, lng: position.lng - 0.02 }}
									label={{
										text: 'Maracatu',
										className: styles.point,
									}}
								/>
								<Marker
									icon={{
										path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z',
										fillColor: 'yellow',
										fillOpacity: 0.9,
										scale: 2,
										strokeColor: 'gold',
										strokeWeight: 2,
									}}
									position={{ lat: position.lat - 0.005, lng: position.lng }}
									label={{ text: 'Caboclinho', className: styles.point }}
								/>
							</>
						)}
					</GoogleMap>
				</LoadScriptNext>
			)}
		</>
	);
};

export default InteractiveMap;
