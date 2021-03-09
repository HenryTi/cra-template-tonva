//=== UqApp builder created on Sun Mar 07 2021 14:01:49 GMT-0500 (GMT-05:00) ===//
import * as BzHelloTonva from './BzHelloTonva';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';

export function setUI(uqs:UQs) {
	BzHelloTonva.setUI(uqs.BzHelloTonva);
}
