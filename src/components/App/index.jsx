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

	return (
		<>
			<Header />
			<main>
				<AddTask addTodo={addTodo} />
				<TaskList todos={todos} />
				<Stats />
			</main>
		</>
	);
}

export default App;
