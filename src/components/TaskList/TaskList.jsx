import TaskItem from './TaskItem';
import EmptyTaskList from '../EmptyTaskList';

const TaskList = ({ todos, removeTodo, completeTodo }) => {
	if (todos.length === 0) {
		return <EmptyTaskList />;
	}

	return (
		<ul>
			{todos.map(({ message, completed, id }) => (
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
