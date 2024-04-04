//Modo FNT Tradicional
// setTimeout(function () {
// 	console.log('Hello World!');
// }, 1000);

//Modo FNT Flecha
// setTimeout( () => {
// 	console.log('Hello World!');
// }, 1000);


// Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior.

// ---- PRIMER FORMA TRADICIONAL

// const getUserByID = (id) => {
// 	const user = {
// 		id, //Esto es redundante id: id, lo indica EMAC 6
// 		name: 'Pablo',
// 	};

// 	setTimeout(() => {
// 		console.log(user);
// 	}, 1500);
// };

// getUserByID(50);

// ---- SEGUNDA FORMA

const getUserByID = (id, callback) => {
	const user = {
		id,
		name: 'Pablo',
	};

	setTimeout(() => {
		callback(user);
	}, 1500);
};

getUserByID(50, (userPrint) => {
	console.log(userPrint);
	console.log(userPrint.id);
	console.log(userPrint.name.toUpperCase());
});
