import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

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
			</main>
		</>
	);
}

export default App;
