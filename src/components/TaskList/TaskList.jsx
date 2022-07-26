import { v4 as uuidv4 } from 'uuid';

import TaskItem from './TaskItem';
import EmptyTaskList from '../EmptyTaskList';

const TaskList = ({ todos }) => {
	if (todos.length === 0) {
		return <EmptyTaskList />;
	}

	return (
		<ul>
			{todos.map((todo) => (
				<TaskItem
					key={uuidv4()}
					message={todo.message}
					completed={todo.completed}
				/>
			))}
		</ul>
	);
};

export default TaskList;
