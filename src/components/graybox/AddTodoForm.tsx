import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {actionCreator, todoFactory} from "../../utils/utils";
import {Button} from "../Button";

export const AddTodoForm = () => {
	const dispatch = useDispatch();
	const textInput = useSelector((state: RootState) => state.todoReducer.addTodoTextInput);

	const addTodo = (e: any) => {
		if (!textInput) return;
		e.preventDefault();
		dispatch(actionCreator("ADD_TODO", todoFactory(false, textInput, new Date().getTime())));
		dispatch(actionCreator("ADD_TEXT_INPUT", ""));
		dispatch(actionCreator("TOGGLE_IS_ADDING_TODO"));
	};

	return (
		<>
			<form className="add-todo-menu__form">
				<input
					className="add-todo-menu__text-area"
					type="textarea"
					placeholder="Type here..."
					onChange={e => dispatch(actionCreator("ADD_TEXT_INPUT", e.target.value))}
					onSubmit={addTodo}
					autoFocus
				/>
				<Button title="Add" action={addTodo} buttonType="submit" />
			</form>
		</>
	);
};
