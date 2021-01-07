import { buildUqApp } from 'tonva-react';
import { uqAppOptions } from './uqAppOptions';

test('build UqApp', async () => {
	await buildUqApp(uqAppOptions);
	let a = 1;
	console.log(a);
}, 600*1000);
