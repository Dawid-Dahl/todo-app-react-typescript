export interface ITodo {
	done: boolean;
	content: string;
	timestamp: number;
}

export interface IAction {
	type: string;
	payload: any;
}

export interface IReducerState {
	todos: Array<ITodo>;
	isAddingTodo: boolean;
	addTodoTextInput: string;
}
