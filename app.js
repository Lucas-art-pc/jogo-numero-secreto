let listaNumerosSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagem(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return tentativas;



    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor!');
        apagarInput();


    } else if(chute < numeroSecreto){
        exibirTextoNaTela('p','O número secreto é maior!');
        apagarInput();
    } if(chute === ''){
        exibirTextoNaTela('p','Digite um número na barra!')
        return tentativas;
    }
    tentativas++;
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == limiteDeNumeros){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function apagarInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    mensagem();
    apagarInput();
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 1;

}
