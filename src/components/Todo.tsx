import React from "react";
import {ITodo} from "../types/types";
import {actionCreator} from "../utils/utils";
import {useDispatch} from "react-redux";
import TodoToggleButton from "./TodoToggleButton";

interface Props {
	key: number;
	todo: ITodo;
}

const Todo: React.FC<Props> = ({todo}) => {
	const dispatch = useDispatch();
	const h1ClassName = todo.done ? "todo__h1--active" : "todo__h1--inactive";

	return (
		<div className="todo">
			<div className="todo__todo_wrapper">
				<TodoToggleButton todo={todo} />
				<div className="todo__h1-text-wrapper">
					<h2 className={h1ClassName}>{todo.content}</h2>
					<p className="todo__timestamp">
						Created at: {new Date(todo.timestamp).toLocaleString()}
					</p>
				</div>
			</div>
			<svg
				className="todo__remove-todo"
				viewBox="0 0 24 24"
				data-id={todo.timestamp}
				onClick={(e: any) =>
					dispatch(actionCreator("REMOVE_TODO", parseInt(e.target.dataset.id)))
				}
				/* onClick={e => console.dir(e.target.dataset.id)} */
			>
				<path
					fill="#f66868"
					data-id={todo.timestamp}
					ng-attr-d="{{icon.data}}"
					d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
				></path>
			</svg>
		</div>
	);
};

export default Todo;
