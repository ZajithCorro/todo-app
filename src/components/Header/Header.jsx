import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import classes from './header.module.css';
import IconSun from '../../assets/icon-sun.svg';
import IconMoon from '../../assets/icon-moon.svg';

const Header = () => {
	const { darkMode, switchTheme } = useContext(ThemeContext);

	const Icon = darkMode ? IconMoon : IconSun;

	return (
		<header className={classes.card}>
			<h1>TODO</h1>
			<button id="theme-switcher" onClick={switchTheme}>
				<img src={Icon} alt="Change color theme" />
			</button>
		</header>
	);
};

export default Header;
