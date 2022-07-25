import { useEffect } from 'react';

import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Stats from '../Stats/Stats';

import BackGroundLight from '../../assets/bg-desktop-light.jpg';

const todos = [
	{
		message: 'Learn React',
		completed: false,
	},
	{
		message: 'Learn Redux',
		completed: false,
	},
	{
		message: 'Learn React Native',
		completed: false,
	},
];

function App() {
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--img-bg',
			`url(${BackGroundLight})`
		);
	}, []);

	return (
		<>
			<Header />
			<main>
				<AddTask />
				<TaskList todos={todos} />
				<Stats />
			</main>
		</>
	);
}

export default App;
