import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCreator, todoFactory} from "../utils/utils";
import {RootState} from "../store";

export const Button = () => {
	const dispatch = useDispatch();
	const textInput = useSelector((state: RootState) => state.reducer.addTodoTextInput);

	const addTodo = (e: any) => {
		e.preventDefault();
		dispatch(actionCreator("ADD_TODO", todoFactory(false, textInput, new Date().getTime())));
	};

	return (
		<>
			<a className="button" href="#" onClick={addTodo}>
				Add
			</a>
		</>
	);
};
