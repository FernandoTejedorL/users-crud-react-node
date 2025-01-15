import { useState } from 'react';

const Finder = ({ setUsers }) => {
	const [id, setId] = useState('');
	console.log(id);

	return (
		<>
			<form onSubmit={event => idSubmit(event, setUsers, id)}>
				<input
					type='text'
					onChange={event => setId(event.target.value)}
					placeholder='write id'
				/>
				<button type='submit'>Send</button>
			</form>
		</>
	);
};

const fetchUserById = async (setUsers, id) => {
	try {
		const response = await fetch(`http://localhost:3000/api/users/${id}`);
		const users = await response.json();
		console.log(users);
		console.log([users]);
		setUsers([users]);
	} catch (error) {
		console.log(error);
	}
};

const idSubmit = async (event, setUsers, id) => {
	event.preventDefault();
	try {
		await fetchUserById(setUsers, id);
	} catch (error) {
		console.log(error);
	}
};

export default Finder;
