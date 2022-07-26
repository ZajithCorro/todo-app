import { useState } from 'react';

import styles from './TaskItem.module.css';

const TaskItem = ({ id, message, completed, removeTodo, completeTodo }) => {
	const [isCompleted, setIsCompleted] = useState(completed);

	const handleChange = () => {
		setIsCompleted(!isCompleted);
		completeTodo(id);
	};

	const classCompleted = completed ? styles.taskCompleted : '';

	return (
		<li className={styles.taskItem}>
			<div className={styles.checkBoxContainer}>
				<input
					className={styles.checkBox}
					type="checkbox"
					checked={isCompleted}
					onChange={handleChange}
				/>
				<span className={styles.checkBoxSpan} />
			</div>
			<p className={`${styles.taskItemMessage} ${classCompleted}`}>{message}</p>
			<button className={styles.btnClear} onClick={() => removeTodo(id)}>
				<img src="src/assets/icon-cross.svg" alt="Clear it" />
			</button>
		</li>
	);
};

export default TaskItem;
