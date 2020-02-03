import {IAction, IReducerState} from "../types/types";

const INITIAL_STATE: IReducerState = {
	todos: [],
	isAddingTodo: false,
	addTodoTextInput: ""
};

export const reducer = (state = INITIAL_STATE, action: IAction) => {
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
