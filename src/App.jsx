import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Stats from './components/Stats/Stats';

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
