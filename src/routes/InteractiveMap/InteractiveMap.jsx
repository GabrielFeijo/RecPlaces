import React, { useEffect, useState } from 'react';
import styles from './InteractiveMap.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
	const [location, setPosition] = useState({
		lat: -3.745,
		lng: -38.523,
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
			<h1 className={styles.title}>Mapa Interativo</h1>
			{location && (
				<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
					<GoogleMap
						mapContainerStyle={{
							width: '400px',
							height: vh - 200,
							borderRadius: 10,
						}}
						center={location}
						zoom={13}
						options={{ disableDefaultUI: true, styles: customStyle }}
						onLoad={onLoad}
					>
						{markers && (
							<>
								<Marker
									position={location}
									label={{ text: 'Sua localização', className: styles.point }}
								/>
								{/* <Marker
									icon={{
										url: 'https://media3.giphy.com/media/hWdpNN0WVZi6erabrI/giphy.gif?cid=6c09b95255a65961323f3d97403782a393ddb6a393eda7ee&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s',
									}}
									position={location}
								/> */}

								<Marker
									icon={{
										url: 'https://www.carnaxe.com.br/a/emocticons/emoticons_carnaval_88.gif',
										scaledSize: { width: 110, height: 110 },
									}}
									position={{ lat: location.lat + 0.005, lng: location.lng }}
									label={{ text: 'Frevinho leve', className: styles.point }}
								/>
								<Marker
									icon={{
										url: 'https://cdn.discordapp.com/attachments/786006828466044931/1104564403250155590/Video_do_WhatsApp_de_2023-05-06_as_21.24.09.mp4',
										scaledSize: { width: 110, height: 110 },
									}}
									position={{ lat: location.lat + 0.005, lng: location.lng }}
									label={{ text: 'Frevinho leve', className: styles.point }}
								/>
								<Marker
									icon={{
										url: 'https://cdn.discordapp.com/attachments/786006828466044931/1104569817056411730/Autoconhecimento._Saude_Mental._Janeiro_Branco._Video_para_Reels_do_Instagram..gif',
										scaledSize: { width: 110, height: 170 },
									}}
									position={{ lat: location.lat, lng: location.lng + 0.02 }}
									label={{
										text: 'Arraial do Quadril',
										className: styles.point,
									}}
								/>
								<Marker
									icon={{
										url: 'https://media0.giphy.com/media/hWdpNN0WVZi6erabrI/giphy.gif?cid=6c09b9524i4ntrprry9726nfb7wla6ueq9ly8xsi4kfh52ys&rid=giphy.gif&ct=s',
										scaledSize: { width: 50, height: 50 },
									}}
									position={{ lat: location.lat, lng: location.lng - 0.02 }}
									label={{ text: 'Maracatu maneiro', className: styles.point }}
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
									position={{ lat: location.lat - 0.005, lng: location.lng }}
									label={{ text: 'Venda do seu Zé', className: styles.point }}
								/>
							</>
						)}
					</GoogleMap>
				</LoadScript>
			)}
		</>
	);
};

export default InteractiveMap;
