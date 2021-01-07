import { VPage } from "tonva-react";
import { CHome } from "./CHome";

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		return <div className="p-3">主要内容</div>;
	}
}