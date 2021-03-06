import {IAction, IReducerState} from "../types/types";

const INITIAL_STATE: IReducerState = {
	todos: [],
	isAddingTodo: false,
	isEditingTodo: false,
	idOfCurrentlyUpdatingTodo: null,
	addTodoTextInput: ""
};

export const todoReducer = (state = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		case "TOGGLE_IS_ADDING_TODO":
			return {...state, isAddingTodo: !state.isAddingTodo};
		case "TOGGLE_IS_EDITING_TODO":
			return {...state, isEditingTodo: !state.isEditingTodo};
		case "UPDATE_CURRENTLY_UPDATING_ID":
			return {...state, idOfCurrentlyUpdatingTodo: action.payload};
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
		case "EDIT_TODO":
			return {
				...state,
				todos: state.todos.map(cur =>
					cur.timestamp === action.payload
						? {...cur, content: state.addTodoTextInput}
						: cur
				)
			};
		case "ADD_TEXT_INPUT":
			return {...state, addTodoTextInput: action.payload};
		default:
			return state;
	}
};
