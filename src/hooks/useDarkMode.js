import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');

		mq.addEventListener('change', () => setDarkMode(mq.matches));
		setDarkMode(mq.matches);

		return () => {
			mq.removeEventListener('change', () => setDarkMode(mq.matches));
		};
	}, []);

	useEffect(() => {
		const html = document.querySelector('html');

		html.classList.toggle('dark', darkMode);
	}, [darkMode]);

	const switchDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return [darkMode, switchDarkMode];
};
