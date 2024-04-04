const employees = [
	{
		id: 1,
		name: 'Pablo',
	},
	{
		id: 2,
		name: 'Pedro',
	},
	{
		id: 3,
		name: 'Lucas',
	},
	{
		id: 4,
		name: 'Marcos',
	},
];

const salaries = [
	{
		id: 1,
		amont: 1000,
	},
	{
		id: 2,
		amont: 1500,
	},
	{
		id: 3,
		amont: 7800,
	},
];

//Simplificaremos esta funcion

// const getEmployee = (id) => {
//     const employee = employee.find( (e) => {
//         return e.id === id;
//     });
// }

const getEmployee = (id, callback) => {
	const employee = employees.find((e) => e.id === id)?.name;

	if (employee) {
		callback(null, employee);
	} else {
		callback(`Empleado con ID ${id} no encontrado`);
	}
};

const getSalarie = (id, callback) => {
	const salarie = salaries.find((s) => s.id === id)?.amont;

	if (salarie) {
		callback(null, salarie);
	} else {
		callback(`Salario con ID ${id} no encontrado`);
	}
};

const id = 4;

getEmployee(id, (error, employee) => {
	if (error) {
		console.log('ERROR!');
		return console.log(error);
	}

	getSalarie(id, (error, salarie) => {
		if (error) {
			return console.log(error);
		}
		console.log(
			'El empleado: ' + employee + ' tiene un salario de: ' + salarie,
		);
	});
});

//El callback-hell no es un problema para la computadora, pero para nosotros si es un problema a la hora de leer y entender el codigo.