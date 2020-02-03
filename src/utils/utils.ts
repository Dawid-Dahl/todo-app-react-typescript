import {ITodo, IAction} from "../types/types";

const todoFactory = (done = false, content = "", timestamp: number): ITodo => ({
	done,
	content,
	timestamp
});

const actionCreator = (type: string, payload: any = undefined): IAction => ({
	type,
	payload
});

export {todoFactory, actionCreator};
