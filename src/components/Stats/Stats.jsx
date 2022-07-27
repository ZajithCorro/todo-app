import styles from './Stats.module.css';

const Stats = ({ todos, setTodos, filter, setFilter }) => {
	const todosLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompletedTodos = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className={styles.statsContainer}>
			<p>{todosLeft} items left</p>
			<div className={styles.statsFilter}>
				<button
					aria-label="All"
					value="all"
					className={filter === 'all' ? styles.activeFilter : ''}
					onClick={handleFilterChange}
				>
					All
				</button>
				<button
					aria-label="Active"
					value="active"
					className={filter === 'active' ? styles.activeFilter : ''}
					onClick={handleFilterChange}
				>
					Active
				</button>
				<button
					aria-label="Completed"
					value="completed"
					className={filter === 'completed' ? styles.activeFilter : ''}
					onClick={handleFilterChange}
				>
					Completed
				</button>
			</div>
			<div className={styles.clearCompletedContainer}>
				<button onClick={clearCompletedTodos}>Clear completed</button>
			</div>
		</div>
	);
};

export default Stats;
