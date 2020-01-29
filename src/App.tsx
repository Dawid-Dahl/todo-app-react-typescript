import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddInput from "./components/AddInput";
import {Graybox} from "./components/graybox/Graybox";

const App: React.FC = () => {
	return (
		<div className="app">
			<Graybox />
			<Header />
			<TodoList />
			<AddInput />
		</div>
	);
};

export default App;
