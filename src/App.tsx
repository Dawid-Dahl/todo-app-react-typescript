import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddInput from "./components/AddInput";
import {Graybox} from "./components/graybox/Graybox";
import {useSelector} from "react-redux";
import {RootState} from "./store";

const App: React.FC = () => {
	const isAddingTodo = useSelector((state: RootState) => state.reducer.isAddingTodo);

	return (
		<div className="app">
			{isAddingTodo ? <Graybox /> : ""}
			<Header />
			<TodoList />
			<AddInput />
		</div>
	);
};

export default App;
