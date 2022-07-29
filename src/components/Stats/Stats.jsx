import { useContext } from 'react';

import { TodoContext } from '../../context/TodoContext';

import styles from './Stats.module.css';

const Stats = () => {
	const { todos, filter, setFilter, clearCompleted } = useContext(TodoContext);

	const todosLeft = todos.filter((todo) => !todo.completed).length;

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
				<button onClick={clearCompleted}>Clear completed</button>
			</div>
		</div>
	);
};

export default Stats;
