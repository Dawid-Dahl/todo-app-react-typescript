import React from "react";
import Todo from "./Todo";

const TodoList = () => {
	return (
		<div className="todolist">
			<ul className="todolist__ul">
				<Todo />
				<Todo />
				<Todo />
			</ul>
		</div>
	);
};

export default TodoList;
