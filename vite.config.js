// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';
import path from 'path'; // Use to resolve paths for SCSS
import tailwindcss from '@tailwindcss/vite'

export default ({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',
	publicDir: 'src/public',
	build: {
		outDir: 'web/dist/',
		emptyOutDir: true,
		sourcemap: true,
		manifest: 'manifest.json',
		minify: true,
		rollupOptions: {
			input: {
				index: './src/index.js',
			},
			output: {
				dir: 'web/dist/',
			}
		},
	},
	server: {
		fs: {
			strict: false
		},
		host: '0.0.0.0',
		origin: 'http://localhost:3000',
		port: 3000,
		strictPort: true,
    cors: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		allowedHosts: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				includePaths: [path.resolve(__dirname, 'src/css')], // Only set include paths
			},
		},
	},
	plugins: [
		tailwindcss(),
		ViteRestart({
			reload: [
				'templates/**/*'
			]
		}),
		ViteFaviconsPlugin({
			logo: "src/public/images/favicon.png",
			inject: false,
			outputPath: '../favicons'
		}),
		copy({
			targets: [
				{
					src: 'src/public/**/*',
					dest: 'web/dist'
				}
			],
		}),
		// ViteImageOptimizer({}),
	]
});
