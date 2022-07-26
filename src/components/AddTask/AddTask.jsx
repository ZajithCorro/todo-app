import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './AddTask.module.css';

const AddTask = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			message: todo,
			completed: false,
			id: uuid(),
		};

		addTodo(newTodo);
		setTodo('');
	};

	return (
		<form className={styles.addTask} onSubmit={handleSubmit}>
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
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default AddTask;
