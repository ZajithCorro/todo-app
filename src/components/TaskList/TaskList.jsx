import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';

const TaskList = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => (
				<TaskItem
					key={uuidv4()}
					message={todo.message}
					completed={todo.completed}
				/>
			))}
		</>
	);
};

export default TaskList;
