import { useEffect, useState } from 'react';

const FetchApi = () => {
	const [users, setUsers] = useState([]);
	const [id, setId] = useState('');
	console.log(id);
	console.log('render');

	useEffect(() => {
		fetchDataNew(setUsers);
	}, []);

	return (
		<>
			<h1>FETCH</h1>
			<form onSubmit={event => idSubmit(event, setUsers, id)}>
				<input
					type='text'
					value={id}
					onChange={event => setId(event.target.value)}
					placeholder='write id'
				/>
				<button type='submit'>Send</button>
			</form>
			{users.length === 0 && <h2>No hay usuarios</h2>}
			{users.map(user => (
				<h2 key={user.userId}>
					Nombre {user.name} ID {user.userId}
				</h2>
			))}
		</>
	);
};

export default FetchApi;

const fetchDataNew = async setUsers => {
	try {
		const response = await fetch('http://localhost:3000/api/users');
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
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

//RESOLVE -> si todo va bien
// REJECT -> si algo va mal

// const promiseTest = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const number = Math.random();

// 			if (number < 0.5) {
// 				reject('ERROR');
// 			} else {
// 				resolve(number);
// 			}
// 		}, 1000);
// 	});
// };

// promiseTest()
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));

// const fetchDataThen = () => {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(data => data.json())

// 		.then(users => console.log(users))

// 		.catch(error => console.log(error));
// };
//fetchDataThen();

// const fetchDataNew = async setUsers => {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/users');
// 		const users = await response.json();
// 		setUsers(users);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
