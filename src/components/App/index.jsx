import { useEffect, useState } from 'react';

import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Stats from '../Stats/Stats';

import BackGroundLight from '../../assets/bg-desktop-light.jpg';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		document.documentElement.style.setProperty(
			'--img-bg',
			`url(${BackGroundLight})`
		);
	}, []);

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
		<>
			<Header />
			<main>
				<AddTask addTodo={addTodo} />
				<TaskList
					todos={todos}
					removeTodo={removeTodo}
					completeTodo={completeTodo}
				/>
				<Stats todos={todos} setTodos={setTodos} />
			</main>
		</>
	);
}

export default App;
