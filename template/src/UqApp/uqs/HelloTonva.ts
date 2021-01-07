//=== UqApp builder created on Wed Jan 06 2021 21:29:21 GMT-0500 (GMT-05:00) ===//
import { UqTuid, UqQuery, UqAction, UqSheet/*, Map, Tag*/ } from "tonva-react";

//===============================
//======= UQ BizDev/hello-tonva ========
//===============================

export declare namespace HelloTonva {
export interface TuidProduct {
	name: string;
}

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	roles: number;
	poke: number;
}

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface ParamWriteProductStock {
	product: number;
	stock: any;
}
interface ResultWriteProductStock {
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamGetProductStock {
	product: number;
}
interface ReturnGetProductStockRet {
	product: number;
	stock: any;
	$id: number;
}
interface ResultGetProductStock {
	ret: ReturnGetProductStockRet[];
}


export interface UqHelloTonva {
	Product: UqTuid<TuidProduct>;
	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	WriteProductStock: UqAction<ParamWriteProductStock, ResultWriteProductStock>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetProductStock: UqQuery<ParamGetProductStock, ResultGetProductStock>;
}
}


