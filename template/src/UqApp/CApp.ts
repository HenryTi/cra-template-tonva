//=== UqApp builder created on Tue Jan 05 2021 18:41:24 GMT-0500 (GMT-05:00) ===//
import { CHome } from "home";
import { CMe } from "me";
import { CBug } from "bug";
import { CUqApp } from "./CBase";
import { res } from "./res";
import { VMain } from "./VMain";

export class CApp extends CUqApp {
	cHome: CHome;
	cBug: CBug;
	cMe: CMe;

	protected async internalStart(isUserLogin: boolean) {
		this.setRes(res);
		this.cHome = this.newC(CHome);
		this.cBug = this.newC(CBug);
		this.cMe = this.newC(CMe);
		this.cHome.load();
		this.openVPage(VMain, undefined, this.dispose);
	}
}
