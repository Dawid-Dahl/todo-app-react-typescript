interface Todo {
	done: boolean;
	content: string;
	timestamp: number;
}

interface ActionObject {
	type: string;
	payload: any;
}

const todoFactory = (done = false, content = "", timestamp: number): Todo => ({
	done,
	content,
	timestamp
});

const actionCreator = (type: string, payload: any = undefined): ActionObject => ({
	type,
	payload
});

export {Todo, todoFactory, actionCreator};
