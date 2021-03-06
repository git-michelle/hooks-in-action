import { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';

const UserPicker = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	if (users === null) {
		return <Spinner />;
	}

	return (
		<select>
			{users.map((user) => (
				<option key={user.id} value={user.name}>
					{user.name}
				</option>
			))}
		</select>
	);
};

export default UserPicker;
