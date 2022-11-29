/*
var area = document.getElementById('area')
function entrar(){
 var nome = prompt("Digite seu nome");

if(nome === '' || nome === null){
  alert("ops, algo deu errado")
  area.innerHTML = "clique no botao para acessar..."
}
else{
  area.innerHTML = "bem vido " + nome + " ";

  let botaoSair = document.createElement("button");
botaoSair.innerText = "Sair da conta";
botaoSair.onclick = sair;

area.appendChild(botaoSair);


}


}


function sair(){
alert("ate mais");

area.innerHTML = "voce saiu"

}
//Media
function mediaAluno(nota1, nota2){
var media = (nota1 + nota2) / 2;

if (media >= 7){
  console.log("aluno aprovado:" + media)
}else if(media < 7){
  console.log("aluno reprovado por media:" + media)
}

}

function aluno(nome, curso){
var mensagem = "bem vindo " + nome + " ao curso de " + curso;

console.log(mensagem);

}
*/

/*
//
O toString converte um array em uma string de valores(separados por virgula.)

var frutas = ['Uva','Amora',"Maca"];
var converter = frutas.toString();

"Uva","Amora","Maca" - "Uva,Amora,Maca"

//

O join separa os itens no array com o que voce escolher

var times = ["Sao Paulo", "Palmeiras", "Vitoria", "Bahia"];
var separar = times.join("/");
--------------------------------
var Paises = ["Brasil", "Argentina", "Mexico", "China"];
var separar = Paises.join("?");
*/

/*
//ELementos a um array: push() e unshift()
Push: adiciona um novo elemento no fim do Array

var times = ["Bahia","Vitoria","Fluminense"];

var lista = times.push("Flamengo");
----------------------
var times = ["Bahia","Vitoria","Fluminense","Brasil"];

var adicionar = times.push("Grecia","atletico mineiro");

//

unshift: adiciona no inicio

var times = ["BRA","MXC","EUA"];

var modifica = times.unshift("GRC");

//POP elimina o ultimo, shift o primeiro

var estado = ["SP","BA","RJ"];

var remove = estado.pop();

-------

var times = ["Bahia","SP","Vitoria"];
var remover = times.shift();

// concat mescla os arrays

var cachorro = ["Rafa","Pingo","Latiane"];

var gato = ["Gatiane", "Marcia", "Gatosa"];

var mesclar = cachorro.concat(gato);

----

var rua = ["Santo Inacio", "Rua Angelica", "Cajazeiras"];

var paises = ["Brasil", "Alemanha", "Italia"];

var juntar = rua.concat(paises);

*/

var rua = ["Santo Inacio", "Rua Angelica", "Cajazeiras"];

var paises = ["Brasil", "Alemanha", "Italia"];

var juntar = rua.concat(paises);
