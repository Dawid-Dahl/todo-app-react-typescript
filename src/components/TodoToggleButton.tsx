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
			<svg
				className={className}
				data-id={todo.timestamp}
				onClick={(e: any) =>
					dispatch(actionCreator("TOGGLE_DONE", parseInt(e.currentTarget.dataset.id)))
				}
				viewBox="0 0 24 24"
			>
				<path
					data-id={todo.timestamp}
					fill="currentColor"
					d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
				/>
			</svg>
			{/* <div
				className={className}
				data-id={todo.timestamp}
				onClick={(e: any) =>
					dispatch(actionCreator("TOGGLE_DONE", parseInt(e.target.dataset.id)))
				}
			/> */}
		</>
	);
};

export default TodoToggleButton;
