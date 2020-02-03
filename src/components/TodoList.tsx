import React from "react";
import Todo from "./Todo";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ITodo} from "../types/types";

const TodoList = () => {
	const todos: Array<ITodo> = useSelector((state: RootState) => state.todoReducer.todos);
	return (
		<div className="todolist">
			<ul className="todolist__ul">
				{todos.map(todo => (
					<Todo key={todo.timestamp} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
