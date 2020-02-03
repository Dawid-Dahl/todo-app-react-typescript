import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddInput from "./components/AddInput";
import {Graybox} from "./components/graybox/Graybox";
import {useSelector} from "react-redux";
import {RootState} from "./store";

const App: React.FC = () => {
	const isAddingTodo = useSelector((state: RootState) => state.todoReducer.isAddingTodo);
	const isEditingTodo = useSelector((state: RootState) => state.todoReducer.isEditingTodo);

	return (
		<div className="app">
			{isAddingTodo || isEditingTodo ? <Graybox /> : ""}
			<Header />
			<TodoList />
			<AddInput />
		</div>
	);
};

export default App;
