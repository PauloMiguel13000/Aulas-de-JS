var area = document.getElementById('area')
function entrar(){
 var nome = prompt("Digite seu nome");

if(nome === '' || nome === null){
  alert("ops, algo deu errado")
  area.innerHTML = "clique no botao para acessar..."
}
else{
  area.innerHTML = "bem vido " + nome;
}


}
