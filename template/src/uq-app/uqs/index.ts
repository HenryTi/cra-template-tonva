//=== UqApp builder created on Tue Nov 30 2021 19:34:37 GMT-0500 (北美东部标准时间) ===//
import * as BzHelloTonva from './BzHelloTonva';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';

export function setUI(uqs:UQs) {
	BzHelloTonva.setUI(uqs.BzHelloTonva);
}
