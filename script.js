//MAP = percorrer um todo um array
/*
let lista =["Miguel","Jose","Maria","Lucas"];


lista.map((item, index) => {
console.log(`passando: ${item} - Esta na posicao ${index} ` )


})
*/

// Reduce = busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {

  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  //console.log(`${indice} - indice atual`);
  //console.log(`${original} - array original`);

  console.log("========")
  return acumulador += numero;

})


console.log("total do reduce: " + total)
