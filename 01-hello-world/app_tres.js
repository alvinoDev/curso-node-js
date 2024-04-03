console.log('Program start');

setTimeout(() => {
	console.log('First Timeout');
}, 3000);

setTimeout(() => {
	console.log('Second Timeout');
}, 0);

setTimeout(() => {
	console.log('Third Timeout');
}, 0);

console.log('Program end');

/* ============================ PROCESO REALIZADO =========================== */

// Pila de Procesos (Call Stack)
// ------ Los procesos se ejecutan y termina aqui.

// Node Apis
// ------ Corren simultaneamente las tareas y van caendo a la Cola de Callback, Js lo va haciendo en secuencia

// Cola de Callbacks
// ------ Se ejecuta el primero que llega
