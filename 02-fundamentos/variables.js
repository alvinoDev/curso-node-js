/* =================================== VAR ================================== */
// Lo más recomendable es no usar este tipo de variable.
var name = 'Pedro';

if (true) {
	var name = 'Juan';
}

console.log(name);

/* =================================== LET ================================== */
//Usamos esta variable si necesitamos cambiar su valor posteriormente.

let lastname = 'Castillo';

if (true) {
	lastname = 'Juarez';
}

console.log(lastname);

/* =================================== CONST ================================== */
//Usamos este tipo de variables cuando no necesitamos cambiar su valor.

const dni = 12345;

if (true) {
	dni = 54321;
}

console.log(dni);
