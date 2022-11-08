/* Código calcúla Média gasta de Combustivel
*/
const gasolina = 5.79;
const etanol = 4.60;
let tipoCombustivel = 'etanol';
let kmPorLitros = 10;
let distanciaKm = 1000;
let litrosGastos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    let gastosR$ = litrosGastos * etanol;
    console.log(gastosR$.toFixed(2));
} else {
    let gastosR$ = litrosGastos * gasolina;
    console.log(gastosR$.toFixed(2));
    
}