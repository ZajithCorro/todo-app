import { useEffect } from 'react';

import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Stats from '../Stats/Stats';

import { TodoProvider } from '../../context/TodoContext';

import styles from './App.module.css';

import BackGroundLight from '../../assets/bg-desktop-light.jpg';

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

			<TodoProvider>
				<main className={styles.main}>
					<AddTask />
					<TaskList />
					<Stats />
				</main>
			</TodoProvider>
		</>
	);
}

export default App;
