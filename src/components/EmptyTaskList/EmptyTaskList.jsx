import styles from './EmptyTaskList.module.css';

const EmptyTaskList = () => {
	return (
		<div className={styles.emptyList}>You don&apos;t have more todos 🔥</div>
	);
};

export default EmptyTaskList;
