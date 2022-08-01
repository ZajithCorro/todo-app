import { createContext } from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, switchTheme] = useDarkMode();

	return (
		<ThemeContext.Provider value={{ darkMode, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
