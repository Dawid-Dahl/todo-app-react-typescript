import React from "react";
import {ITodo} from "../types/types";
import {useDispatch} from "react-redux";
import {actionCreator} from "../utils/utils";

interface Props {
	todo: ITodo;
}

const TodoToggleButton: React.FC<Props> = ({todo}) => {
	const dispatch = useDispatch();
	const className = todo.done ? "todo__done-marker--active" : "todo__done-marker--inactive";

	return (
		<>
			<div
				className={className}
				data-id={todo.timestamp}
				onClick={(e: any) =>
					dispatch(actionCreator("TOGGLE_DONE", parseInt(e.target.dataset.id)))
				}
			/>
		</>
	);
};

export default TodoToggleButton;
