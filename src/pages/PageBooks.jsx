import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { subject } = useContext(AppContext);
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>
			{subject === 'technology' ? (
				<p>*Books on Web Development*</p>
			) : (
				<p>*Books on World History*</p>
			)}
		</div>
	);
};
