import React from "react";
import {Button} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {actionCreator} from "../../utils/utils";
import {RootState} from "../../store";

export const EditTodoMenu = () => {
	const dispatch = useDispatch();
	const textInput = useSelector((state: RootState) => state.reducer.addTodoTextInput);
	const idOfCurrentlyUpdatingTodo = useSelector(
		(state: RootState) => state.reducer.idOfCurrentlyUpdatingTodo
	);

	const editTodo = (e: any) => {
		if (!textInput) return;
		e.preventDefault();
		dispatch(actionCreator("EDIT_TODO", parseInt(idOfCurrentlyUpdatingTodo)));
		dispatch(actionCreator("ADD_TEXT_INPUT", ""));
		dispatch(actionCreator("UPDATE_CURRENTLY_UPDATING_ID", null));
		dispatch(actionCreator("TOGGLE_IS_EDITING_TODO"));
	};

	return (
		<div className="add-todo-menu">
			<svg
				className="add-todo-menu__remove-menu"
				viewBox="0 0 24 24"
				onClick={() => {
					dispatch(actionCreator("TOGGLE_IS_EDITING_TODO"));
					dispatch(actionCreator("UPDATE_CURRENTLY_UPDATING_ID", null));
				}}
			>
				<path
					fill="#bdbdbd"
					ng-attr-d="{{icon.data}}"
					d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
				></path>
			</svg>
			<h1 className="add-todo-menu__h1">Edit the todo below:</h1>
			<form className="add-todo-menu__form">
				<input
					className="add-todo-menu__text-area"
					type="textarea"
					placeholder="Type here..."
					onChange={e => dispatch(actionCreator("ADD_TEXT_INPUT", e.target.value))}
					onSubmit={editTodo}
					autoFocus
				/>
				<Button title="Edit" action={editTodo} buttonType="submit" />
			</form>
		</div>
	);
};
