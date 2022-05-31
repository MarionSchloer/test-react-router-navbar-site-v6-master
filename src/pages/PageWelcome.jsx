import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { subject, setSubject } = useContext(AppContext);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<div>
				<div>{subject}</div>
				<button
					onClick={() =>
						setSubject(
							subject === 'history' ? 'technology' : 'history'
						)
					}
				>
					Toggle Subject
				</button>
			</div>
		</div>
	);
};
