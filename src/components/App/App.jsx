import { useEffect, useState } from 'react';

import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Stats from '../Stats/Stats';

import styles from './App.module.css';

import { TodoProvider } from '../../context/TodoContext';

import BackGroundLight from '../../assets/bg-desktop-light.jpg';

function App() {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');

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

			<TodoProvider>
				<main className={styles.main}>
					<AddTask addTodo={addTodo} />
					<TaskList
						todos={todos}
						removeTodo={removeTodo}
						completeTodo={completeTodo}
						filter={filter}
					/>
					<Stats
						todos={todos}
						setTodos={setTodos}
						filter={filter}
						setFilter={setFilter}
					/>
				</main>
			</TodoProvider>
		</>
	);
}

export default App;
