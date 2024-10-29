// a tag do HTML sempre sera o que aparece dps de uma chavinha
// sempre criar uma variavel com um nome qualquer, usar...document.querySelector('tag')
// inserir do ou no HTML algo do JS usar....innerHTML
// criar uma funcao usa-se a palavra FUNCTION...blablabla
// imput: entrada de usuario
// VALUE: selecionar apenas um valor de algo, por exemplo de TAGs
// = atribuir
// == comparar
// String: TEXTO
// Number: NUMERO
// Boolean: VERDADEIRO OU FALSO
// abre e fecha parenteses () para indicar que e uma FUNCAO
// colocar atributo SETattribute
// remover atributo REMOVEattribute

// ARRAY = lista - e sempre que utilizarmos uma lista usamos colchetes...[]
// length = tamanho da lista, ou seja, quantos elementos tem na lista
// SEMPRE o primeiro elemento vai ser 0, depois 1 e assim por diante
// push = adiciona algum item no final da lista----frutas.push('Morango') fica no final da lista o morango
// pop = remover ultimo elemento---frutas.pop()---remove o morango colocado

// Velocidade da fala colocada {rate:1.2})


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
       
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';  
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
       listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}   

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
