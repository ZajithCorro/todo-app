import styles from './Stats.module.css';

const Stats = () => {
	return (
		<div className={styles.statsContainer}>
			<p>2 items left</p>
			<div className={styles.statsFilter}>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<div className={styles.clearCompletedContainer}>
				<button>Clear completed</button>
			</div>
		</div>
	);
};

export default Stats;
