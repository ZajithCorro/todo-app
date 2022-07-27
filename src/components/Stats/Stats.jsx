import styles from './Stats.module.css';

const Stats = ({ todos, setTodos }) => {
	const todosLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompletedTodos = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	return (
		<div className={styles.statsContainer}>
			<p>{todosLeft} items left</p>
			<div className={styles.statsFilter}>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<div className={styles.clearCompletedContainer}>
				<button onClick={clearCompletedTodos}>Clear completed</button>
			</div>
		</div>
	);
};

export default Stats;
