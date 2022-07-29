import { useContext } from 'react';

import TaskItem from './TaskItem';
import EmptyTaskList from '../EmptyTaskList';

import { TodoContext } from '../../context/TodoContext';

const TaskList = () => {
	const { todos, removeTodo, completeTodo, filter } = useContext(TodoContext);

	let data = todos;

	if (filter === 'completed') {
		data = todos.filter((todo) => todo.completed);
	} else if (filter === 'active') {
		data = todos.filter((todo) => !todo.completed);
	}

	if (data.length === 0) {
		return <EmptyTaskList />;
	}

	return (
		<ul>
			{data.map(({ message, completed, id }) => (
				<TaskItem
					key={id}
					id={id}
					message={message}
					completed={completed}
					removeTodo={removeTodo}
					completeTodo={completeTodo}
				/>
			))}
		</ul>
	);
};

export default TaskList;
