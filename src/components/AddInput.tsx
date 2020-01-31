import React from "react";
import {actionCreator} from "../utils/utils";
import {useDispatch} from "react-redux";

const AddInput = () => {
	const dispatch = useDispatch();

	return (
		<div className="add-input">
			<svg
				className="add-input__add-todo-svg"
				onClick={() => dispatch(actionCreator("TOGGLE_IS_ADDING_TODO"))}
				viewBox="0 0 24 24"
			>
				<path
					fill="#6F6F6F"
					ng-attr-d="{{icon.data}}"
					d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				></path>
			</svg>
			<p
				className="add-input__add-todo-p"
				onClick={() => dispatch(actionCreator("TOGGLE_IS_ADDING_TODO"))}
			>
				Add Todo
			</p>
		</div>
	);
};

export default AddInput;
