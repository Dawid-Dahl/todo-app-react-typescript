import React from "react";
import {Button} from "../Button";
import {useDispatch} from "react-redux";
import {actionCreator} from "../../utils/utils";

export const AddTodoMenu = () => {
	const dispatch = useDispatch();
	return (
		<div className="add-todo-menu">
			<h1 className="add-todo-menu__h1">What would you like to add?</h1>
			<input
				className="add-todo-menu__text-area"
				type="textarea"
				placeholder="Type here..."
				onChange={e => dispatch(actionCreator("ADD_TEXT_INPUT", e.target.value))}
			/>
			<Button />
		</div>
	);
};
