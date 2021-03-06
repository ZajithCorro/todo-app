import styles from './TaskItem.module.css';

const TaskItem = ({ message, completed }) => {
	const classCompleted = completed ? styles.taskCompleted : '';

	return (
		<div className={styles.taskItem}>
			<div className={styles.checkBoxContainer}>
				<input className={styles.checkBox} type="checkbox" />
				<span className={styles.checkBoxSpan} />
			</div>
			<p className={`${styles.taskItemMessage} ${classCompleted}`}>{message}</p>
			<button className={styles.btnClear}>
				<img src="src/assets/icon-cross.svg" alt="Clear it" />
			</button>
		</div>
	);
};

export default TaskItem;
