import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';

const TaskList = ({ todos }) => {
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
