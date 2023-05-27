import { ConfigEnv } from 'vite';
import { ManifestV3Export } from '@crxjs/vite-plugin';

import packageJson from './package.json';

const defineManifest = async (env: ConfigEnv): Promise<ManifestV3Export> => {
	const title: string = env?.mode === 'staging' ? '[INTERNAL] CRXJS Power Tools' : 'CRXJS Power Tools';
	const { version } = packageJson;

	const [major, minor, patch, label = '0'] = version
		// can only contain digits, dots, or dash
		.replace(/[^\d.-]+/g, '')
		// split into version parts
		.split(/[.-]/);

	return {
		manifest_version: 3,
		name: title,
		description: 'Browswer extension for jira tasks. Allows to copy the jira tab and title for git branchs.',
		version: `${major}.${minor}.${patch}.${label}`,
		version_name: version,
		permissions: ['tabs'],
		host_permissions: ['https://*.atlassian.net/*'],
		action: {
			default_icon: {
				16: 'images/icon-16.png',
				32: 'images/icon-32.png',
				48: 'images/icon-48.png',
				128: 'images/icon-128.png',
			},
			default_title: title,
			default_popup: 'index.html',
		},
	};
};

export default defineManifest;
