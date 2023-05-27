import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import defaineManifest from './manifest.config';

export default defineConfig({
	plugins: [crx({ manifest: defaineManifest() })],
	css: {
		devSourcemap: true,
	},
});
