import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { TodoContext } from '../../context/TodoContext';

import styles from './AddTask.module.css';

const AddTask = () => {
	const [todo, setTodo] = useState('');
	const { addTodo } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (todo.trim().length <= 0) return;

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
