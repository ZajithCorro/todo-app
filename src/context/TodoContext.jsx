import { createContext, useState } from 'react';

const initialState = {
	todos: [],
	filter: 'all',
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const completeTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}

				return todo;
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{ todos, filter, addTodo, removeTodo, completeTodo, setFilter }}
		>
			{children}
		</TodoContext.Provider>
	);
};
