import Header from '../Header';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import Stats from '../Stats/Stats';

import { TodoProvider } from '../../context/TodoContext';
import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.module.css';

function App() {
	return (
		<ThemeProvider>
			<Header />

			<TodoProvider>
				<main className={styles.main}>
					<AddTask />
					<TaskList />
					<Stats />
				</main>
			</TodoProvider>
		</ThemeProvider>
	);
}

export default App;
