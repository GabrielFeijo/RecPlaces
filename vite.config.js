import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			includeAssets: ['./src/assets/logo.png', './src/assets/loading.png'],
			registerType: 'autoUpdate',
			manifest: {
				background_color: '#1aa7ec',
				description:
					'O RecPlaces oferece uma ampla gama de recursos e funcionalidades projetados para transformar sua visita em uma jornada memorável. Com um mapa interativo e detalhado, você poderá navegar facilmente pelas ruas pitorescas, praças encantadoras e monumentos históricos que compõem essa região icônica.',
				dir: 'ltr',
				display: 'standalone',
				name: 'RecPlaces',
				orientation: 'any',
				scope: '/',
				short_name: 'RecPlaces',
				start_url: '/',
				theme_color: '#fff',
				categories: ['entertainment', 'games', 'navigation', 'photo', 'travel'],
				screenshots: [
					{
						src: '/pwa/screen2.png',
						sizes: '750x1334',
						type: 'image/png',
					},
					{
						src: '/pwa/screen1.png',
						sizes: '1280x800',
						type: 'image/png',
					},
				],
				icons: [
					{
						src: '/pwa/windows11/SmallTile.scale-100.png',
						sizes: '71x71',
					},
					{
						src: '/pwa/windows11/SmallTile.scale-125.png',
						sizes: '89x89',
					},
					{
						src: '/pwa/windows11/SmallTile.scale-150.png',
						sizes: '107x107',
					},
					{
						src: '/pwa/windows11/SmallTile.scale-200.png',
						sizes: '142x142',
					},
					{
						src: '/pwa/windows11/SmallTile.scale-400.png',
						sizes: '284x284',
					},
					{
						src: '/pwa/windows11/Square150x150Logo.scale-100.png',
						sizes: '150x150',
					},
					{
						src: '/pwa/windows11/Square150x150Logo.scale-125.png',
						sizes: '188x188',
					},
					{
						src: '/pwa/windows11/Square150x150Logo.scale-150.png',
						sizes: '225x225',
					},
					{
						src: '/pwa/windows11/Square150x150Logo.scale-200.png',
						sizes: '300x300',
					},
					{
						src: '/pwa/windows11/Square150x150Logo.scale-400.png',
						sizes: '600x600',
					},
					{
						src: '/pwa/windows11/Wide310x150Logo.scale-100.png',
						sizes: '310x150',
					},
					{
						src: '/pwa/windows11/Wide310x150Logo.scale-125.png',
						sizes: '388x188',
					},
					{
						src: '/pwa/windows11/Wide310x150Logo.scale-150.png',
						sizes: '465x225',
					},
					{
						src: '/pwa/windows11/Wide310x150Logo.scale-200.png',
						sizes: '620x300',
					},
					{
						src: '/pwa/windows11/Wide310x150Logo.scale-400.png',
						sizes: '1240x600',
					},
					{
						src: '/pwa/windows11/LargeTile.scale-100.png',
						sizes: '310x310',
					},
					{
						src: '/pwa/windows11/LargeTile.scale-125.png',
						sizes: '388x388',
					},
					{
						src: '/pwa/windows11/LargeTile.scale-150.png',
						sizes: '465x465',
					},
					{
						src: '/pwa/windows11/LargeTile.scale-200.png',
						sizes: '620x620',
					},
					{
						src: '/pwa/windows11/LargeTile.scale-400.png',
						sizes: '1240x1240',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.scale-100.png',
						sizes: '44x44',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.scale-125.png',
						sizes: '55x55',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.scale-150.png',
						sizes: '66x66',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.scale-200.png',
						sizes: '88x88',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.scale-400.png',
						sizes: '176x176',
					},
					{
						src: '/pwa/windows11/StoreLogo.scale-100.png',
						sizes: '50x50',
					},
					{
						src: '/pwa/windows11/StoreLogo.scale-125.png',
						sizes: '63x63',
					},
					{
						src: '/pwa/windows11/StoreLogo.scale-150.png',
						sizes: '75x75',
					},
					{
						src: '/pwa/windows11/StoreLogo.scale-200.png',
						sizes: '100x100',
					},
					{
						src: '/pwa/windows11/StoreLogo.scale-400.png',
						sizes: '200x200',
					},
					{
						src: '/pwa/windows11/SplashScreen.scale-100.png',
						sizes: '620x300',
					},
					{
						src: '/pwa/windows11/SplashScreen.scale-125.png',
						sizes: '775x375',
					},
					{
						src: '/pwa/windows11/SplashScreen.scale-150.png',
						sizes: '930x450',
					},
					{
						src: '/pwa/windows11/SplashScreen.scale-200.png',
						sizes: '1240x600',
					},
					{
						src: '/pwa/windows11/SplashScreen.scale-400.png',
						sizes: '2480x1200',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-16.png',
						sizes: '16x16',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-20.png',
						sizes: '20x20',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-24.png',
						sizes: '24x24',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-30.png',
						sizes: '30x30',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-32.png',
						sizes: '32x32',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-36.png',
						sizes: '36x36',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-40.png',
						sizes: '40x40',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-44.png',
						sizes: '44x44',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-48.png',
						sizes: '48x48',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-60.png',
						sizes: '60x60',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-64.png',
						sizes: '64x64',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-72.png',
						sizes: '72x72',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-80.png',
						sizes: '80x80',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-96.png',
						sizes: '96x96',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.targetsize-256.png',
						sizes: '256x256',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
						sizes: '16x16',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
						sizes: '20x20',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
						sizes: '24x24',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
						sizes: '30x30',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
						sizes: '32x32',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
						sizes: '36x36',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
						sizes: '40x40',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
						sizes: '44x44',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
						sizes: '48x48',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
						sizes: '60x60',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
						sizes: '64x64',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
						sizes: '72x72',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
						sizes: '80x80',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
						sizes: '96x96',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
						sizes: '256x256',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
						sizes: '16x16',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
						sizes: '20x20',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
						sizes: '24x24',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
						sizes: '30x30',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
						sizes: '32x32',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
						sizes: '36x36',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
						sizes: '40x40',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
						sizes: '44x44',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
						sizes: '48x48',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
						sizes: '60x60',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
						sizes: '64x64',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
						sizes: '72x72',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
						sizes: '80x80',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
						sizes: '96x96',
					},
					{
						src: '/pwa/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
						sizes: '256x256',
					},
					{
						src: '/pwa/android/android-launchericon-512-512.png',
						sizes: '512x512',
					},
					{
						src: '/pwa/android/android-launchericon-192-192.png',
						sizes: '192x192',
					},
					{
						src: '/pwa/android/android-launchericon-144-144.png',
						sizes: '144x144',
					},
					{
						src: '/pwa/android/android-launchericon-96-96.png',
						sizes: '96x96',
					},
					{
						src: '/pwa/android/android-launchericon-72-72.png',
						sizes: '72x72',
					},
					{
						src: '/pwa/android/android-launchericon-48-48.png',
						sizes: '48x48',
					},
					{
						src: '/pwa/ios/16.png',
						sizes: '16x16',
					},
					{
						src: '/pwa/ios/20.png',
						sizes: '20x20',
					},
					{
						src: '/pwa/ios/29.png',
						sizes: '29x29',
					},
					{
						src: '/pwa/ios/32.png',
						sizes: '32x32',
					},
					{
						src: '/pwa/ios/40.png',
						sizes: '40x40',
					},
					{
						src: '/pwa/ios/50.png',
						sizes: '50x50',
					},
					{
						src: '/pwa/ios/57.png',
						sizes: '57x57',
					},
					{
						src: '/pwa/ios/58.png',
						sizes: '58x58',
					},
					{
						src: '/pwa/ios/60.png',
						sizes: '60x60',
					},
					{
						src: '/pwa/ios/64.png',
						sizes: '64x64',
					},
					{
						src: '/pwa/ios/72.png',
						sizes: '72x72',
					},
					{
						src: '/pwa/ios/76.png',
						sizes: '76x76',
					},
					{
						src: '/pwa/ios/80.png',
						sizes: '80x80',
					},
					{
						src: '/pwa/ios/87.png',
						sizes: '87x87',
					},
					{
						src: '/pwa/ios/100.png',
						sizes: '100x100',
					},
					{
						src: '/pwa/ios/114.png',
						sizes: '114x114',
					},
					{
						src: '/pwa/ios/120.png',
						sizes: '120x120',
					},
					{
						src: '/pwa/ios/128.png',
						sizes: '128x128',
					},
					{
						src: '/pwa/ios/144.png',
						sizes: '144x144',
					},
					{
						src: '/pwa/ios/152.png',
						sizes: '152x152',
					},
					{
						src: '/pwa/ios/167.png',
						sizes: '167x167',
					},
					{
						src: '/pwa/ios/180.png',
						sizes: '180x180',
					},
					{
						src: '/pwa/ios/192.png',
						sizes: '192x192',
					},
					{
						src: '/pwa/ios/256.png',
						sizes: '256x256',
					},
					{
						src: '/pwa/ios/512.png',
						sizes: '512x512',
					},
					{
						src: '/pwa/ios/1024.png',
						sizes: '1024x1024',
					},
				],
				shortcuts: [],
				lang: 'pt',
			},
		}),
	],
});
