import React, { useState, useEffect, Fragment } from 'react';

const UsersList = () => {
	const [users, setUsers] = useState(null);
	const [userIndex, setUserIndex] = useState(0);

	useEffect(() => {
		const getUsers = async () => {
			const res = await fetch('http://localhost:3001/users');
			const data = await res.json();
			setUsers(data);
		};
		getUsers();
	}, []);

	if (users === null) {
		return <p>Loading...</p>;
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
