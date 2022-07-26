import classes from './header.module.css';
import IconSun from '../../assets/icon-sun.svg';

const Header = () => {
	return (
		<header className={classes.card}>
			<h1>TODO</h1>
			<button id="theme-switcher">
				<img src={IconSun} alt="Change color theme" />
			</button>
		</header>
	);
};

export default Header;
