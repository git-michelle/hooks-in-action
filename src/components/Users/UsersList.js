import React, { useState, useEffect, Fragment } from 'react';
import getData from '../../utils/api';
import Spinner from '../UI/Spinner';

const UsersList = () => {
	const [users, setUsers] = useState(null);
	const [userIndex, setUserIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getData('http://localhost:3001/users')
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (error) {
		return <p>{error.message}</p>;
	}
	if (loading) {
		return (
			<p>
				<Spinner /> Loading...
			</p>
		);
	}
	const currentUser = users?.[userIndex];

	return (
		<Fragment>
			<ul>
				{users.map((user, index) => (
					<li key={user.id}>
						<button
							className={userIndex === index ? 'selected btn' : 'btn'}
							onClick={() => setUserIndex(index)}
						>
							{user.name}
						</button>
					</li>
				))}
			</ul>
			<div>
				<h2>{currentUser.name}</h2>
				<h3>{currentUser.title}</h3>
				<p>{currentUser.notes}</p>
			</div>
		</Fragment>
	);
};

export default UsersList;
