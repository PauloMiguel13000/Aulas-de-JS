// Find

let listagem = [5,6,"Jose",2,"Mateus", "Jose"];

let busca = listagem.find((item) =>{
return item === "Jose";

})

console.log(busca)

// filter

let palavras = ["Matheus","Ana","Jose", "Ricardo Silva", "Sujeito Programador","Jose"];

let resultado = palavras.filter((item)=>{

return item === "Jose";

})
console.log(resultado)

