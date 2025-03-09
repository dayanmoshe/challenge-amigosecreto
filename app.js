//O  objetivo deste projeto é testar as habilidades em lógica de programação JavaScript em uma aplicação de amigo-secreto
//criar um array que armazenará os nomes
let amigos = [];
//criar uma funcao para adicionar um amigo que tem seu nome escrito no campo de texto e armazenado a partir do clique do botao adicionar amigo
function adicionarAmigo() {

    let inputAmigo = document.getElementById("amigo"); //pega pela identificacao do id no html 
    let nomeAmigo = inputAmigo.value; // armazena o valor 

    if (!nomeAmigo) {
        alert (" Digite o nome do amigo");
        return;
    
    }
    //fez uma validação para ter conteudo no campo que enviou o valor para a variavél, assim, checando o valor da variavel conseguimos por através desta condicional validar
    amigos.push(nomeAmigo); //agrega o valor da variavel nomeAmigo dentro do array inicial
    inputAmigo.value = ""; //limpa o campo de texto pra deixar mais bonitinho
    inputAmigo.focus(); // seta o cursor para facilitar a proxima entrada
    atualizarlista(); // chama a funcao descrita
}

function atualizarlista() {

    let listaAmigos = document.getElementById("listaAmigos"); // variavel listaAmigosvinculada ao html
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    } //neste laço o codigo cria a partir da lista de amigos uma exibicao nao repetida na tela do html
}
// essa funcao primeira checa se a lista de amigos nao esta vazia
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    //cria duas variaveis aonde na primeira se armazena o resultado do embaralhamento dos nomes em uma posicao do array amigo
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado"); // obtem o elemento html com id resultado para exibir n
    resultado.innerHTML =  `O amigo sorteado foi: ${sorteado}`; // exibe a mensagem do resultado
    limparLista.innerHTML = ""; // limpa a lista 
    amigos = [];
}
