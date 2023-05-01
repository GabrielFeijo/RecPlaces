import React from 'react';

import styles from './Modal.module.css';
import { Button, Button2 } from '../Button/Button';

export const Modal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.location}>
				<div className={styles.line}></div>
				<div className={styles.info}>
					<div>
						<h2>Envie sua localizacação</h2>
						<p className={styles.desc}>
							Enviando sua localização, podemos confirmar o seu local atual, e
							calcular suas Chicoins corretamente!
						</p>
					</div>
					<Button text={'Enviar localização'} />
					<Button2 text={'Ler QRcode'} />
				</div>
			</div>
		</div>
	);
};

export const ModalGeoLocation = ({ setModal, getPermission }) => {
	return (
		<div className={styles.modal2}>
			<div className={styles.location2}>
				<div
					className={styles.line}
					onClick={() => {
						setModal(false);
					}}
				></div>
				<div className={styles.info}>
					<div>
						<h2>Envie sua localizacação</h2>
						<p className={styles.desc}>
							Enviando sua localização, podemos traçar a melhor rota até o local
							escolhido! Se quiser, adicione mais pontos desejados, visite mais
							lugares!
						</p>
					</div>
					<Button
						text={'Enviar localização'}
						event={getPermission}
					/>
				</div>
			</div>
		</div>
	);
};
