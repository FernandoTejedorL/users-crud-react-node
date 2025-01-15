import { useEffect, useState } from 'react';

const FetchApi = () => {
	const [users, setUsers] = useState([]);

	console.log('render');

	useEffect(() => {
		fetchDataNew(setUsers);
		console.log('use effect');
	}, []);

	return (
		<>
			<h1>FETCH</h1>
			{users.length === 0 && <h2>No hay usuarios</h2>}
			{users.map(user => (
				<h2 key={user.id}>{user.name}</h2>
			))}
		</>
	);
};

export default FetchApi;

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

const fetchDataNew = async setUsers => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};
