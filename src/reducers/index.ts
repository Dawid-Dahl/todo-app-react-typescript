import {Todo} from "../utils/utils";

interface Action {
	type: string;
	payload: any;
}

interface ReducerState {
	todos: Array<Todo>;
	isAddingTodo: boolean;
	addTodoTextInput: string;
}

const INITIAL_STATE: ReducerState = {
	todos: [],
	isAddingTodo: false,
	addTodoTextInput: ""
};

export const reducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case "TOGGLE_IS_ADDING_TODO":
			return {...state, isAddingTodo: !state.isAddingTodo};
		case "ADD_TODO":
			return {...state, todos: [...state.todos, action.payload]};
		case "ADD_TEXT_INPUT":
			return {...state, addTodoTextInput: action.payload};
		default:
			return state;
	}
};
