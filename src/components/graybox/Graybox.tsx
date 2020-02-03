import React from "react";
import {AddTodoMenu} from "./AddTodoMenu";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {EditTodoMenu} from "./EditTodoMenu";

export const Graybox = () => {
	const isEditingTodo = useSelector((state: RootState) => state.reducer.isEditingTodo);
	return <div className="graybox">{isEditingTodo ? <EditTodoMenu /> : <AddTodoMenu />}</div>;
};
