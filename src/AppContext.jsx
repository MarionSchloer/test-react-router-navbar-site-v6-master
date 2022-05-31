import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [subject, setSubject] = useState('technology');

	return (
		<AppContext.Provider
			value={{
				subject,
				setSubject,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
