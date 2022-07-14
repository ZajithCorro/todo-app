import styles from './AddTask.module.css';

const AddTask = () => {
	return (
		<div className={styles.add_task}>
			<div className={styles.button_add}>
				<button className={styles.btn}>+</button>
			</div>
			<div className={styles.input_container}>
				<label htmlFor="addt" className="d-none">
					Create todo
				</label>
				<input
					type="text"
					className={styles.input}
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
