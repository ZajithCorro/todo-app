import styles from './AddTask.module.css';

const AddTask = () => {
	return (
		<div className={styles.addTask}>
			<div className={styles.btnAddTaskContainer}>
				<button className={styles.btnAddTask}>+</button>
			</div>
			<div className={styles.inputAddTaskContainer}>
				<label htmlFor="addt" className="d-none">
					Create todo
				</label>
				<input
					type="text"
					className={styles.inputAddTask}
					placeholder="Create a new todo..."
					spellCheck="false"
					autoComplete="off"
					id="addt"
				/>
			</div>
		</div>
	);
};

export default AddTask;
