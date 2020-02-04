import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {actionCreator} from "../../utils/utils";
import {Button} from "../Button";

export const EditTodoForm = () => {
	const dispatch = useDispatch();
	const textInput = useSelector((state: RootState) => state.todoReducer.addTodoTextInput);
	const idOfCurrentlyUpdatingTodo = useSelector(
		(state: RootState) => state.todoReducer.idOfCurrentlyUpdatingTodo
	);

	const editTodo = (e: any) => {
		e.preventDefault();
		if (!textInput) return;
		dispatch(actionCreator("EDIT_TODO", parseInt(idOfCurrentlyUpdatingTodo)));
		dispatch(actionCreator("ADD_TEXT_INPUT", ""));
		dispatch(actionCreator("UPDATE_CURRENTLY_UPDATING_ID", null));
		dispatch(actionCreator("TOGGLE_IS_EDITING_TODO"));
	};

	return (
		<>
			<form className="add-todo-menu__form">
				<input
					className="add-todo-menu__text-area"
					type="textarea"
					placeholder="Type here..."
					onChange={e => dispatch(actionCreator("ADD_TEXT_INPUT", e.target.value))}
					onSubmit={editTodo}
					autoFocus
					value={textInput}
				/>
				<Button title="Edit" action={editTodo} buttonType="submit" />
			</form>
		</>
	);
};
