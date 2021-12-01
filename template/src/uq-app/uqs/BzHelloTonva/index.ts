import { UqExt as Uq } from './BzHelloTonva';

function assign(uq:Uq, to:string, from:any): void {
	try {
		Object.assign((uq as any)[to], from);
	}
	catch {}
}
	
export function setUI(uq: Uq) {
}
export * from './BzHelloTonva';
