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

---

var quests = ["Limpar a casa", "Ir ao mercado", "Comprar picole"];

var add = quests.push("Studying JavaScript", "go to the fair", "Create apps");

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


var x = 0;

// while = enquanto

while(x < 10){

  document.write("<br> O valor do x é:" + x);

  // aumentando o valor do x

  x ++;

  // For = para

var valor = 15;

for(a = 0; a < valor; a++){
// o que tiver aqui vai ser exect

document.write("<br> valor do a é:" + a)

}

}

//switch serve para casos

function pedir(){
var valor = prompt("digite um valor de 1 a 4");

switch(Number(valor)){
case 1:
alert("numero 1, suco");
break;
case 2:
  alert("numero 2, agua");
  break;
case 3:
  alert("numero 3,sorvete");
break;
case 4:
  alert("chamar o garcom");
break;
default:
  alert("escolha entre 1 a 4");
  break;
}

}
--
com nomes

function pedir(){
var valor = prompt("digite um valor de 1 a 4");

switch(valor){
case 'mateus':
  alert("voce chamou Mateus");
  break;
  case 'Lucas':
    alert("voce chamou lucas");
    break;
    default:
      alert("ola fulanos");
      break;

}
}

//
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso

//Formula:  peso / (altura*altura);

--
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
  event.preventDefault();

peso = document.getElementById('peso').value;

altura = document.getElementById('altura').value;

imc = peso / (altura * altura);

resultado = document.getElementById('resultado');
if(imc < 17){


resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Cuidado, esta muito abaixo do peso!'

} else if(imc > 17 && imc <= 18.49){

  resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Cuidado, esta abaixo do peso!'


} else if(imc >= 18.5 && imc < 24.99 ){


resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Esta com o peso normal!'

} else if(imc >= 25 && imc < 29.99){


  resultado.innerHTML = '<br/> Seu resultado foi' + imc.toFixed(2) + '<br/> Esta acima do peso'

}else if (imc >= 30){


  resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Esta com obesidade'
}

document.getElementById('peso').value = '';
document.getElementById('altura').value = '';


}
*/


