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
		case "TOGGLE_DONE":
			return {
				...state,
				todos: state.todos.map(cur =>
					cur.timestamp === action.payload ? {...cur, done: !cur.done} : cur
				)
			};
		case "REMOVE_TODO":
			return {...state, todos: state.todos.filter(cur => cur.timestamp !== action.payload)};
		case "ADD_TEXT_INPUT":
			return {...state, addTodoTextInput: action.payload};
		default:
			return state;
	}
};
