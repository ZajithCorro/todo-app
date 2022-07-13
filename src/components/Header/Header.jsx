import classes from './header.module.css';

const Header = () => {
	return (
		<header className={classes.card}>
			<h1>TODO</h1>
			<button id="theme-switcher">
				<img src="/src/assets/icon-sun.svg" alt="Change color theme" />
			</button>
		</header>
	);
};

export default Header;
