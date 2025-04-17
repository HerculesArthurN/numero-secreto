let numeroLimite = 40;  // Limite máximo para o número secreto
let numeroSecreto = gerarNumeroAleatorio();  // Gera o número secreto aleatório
let tentativas = 1;  // Contador de tentativas

// Função para exibir mensagem na tela e também falar a mensagem
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroLimite + 1);
}

// Função que verifica o chute do jogador
function verificarChute() {
    let chute = document.querySelector('#inputNumero').value;

    // Se o chute for igual ao número secreto, o jogo termina
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');  // Habilita botão "Novo Jogo"
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;  // Incrementa o número de tentativas
        limparCampo();  // Limpa o campo de entrada
    }
}

// Função para limpar o campo de entrada
function limparCampo() {
    let chute = document.querySelector('#inputNumero');
    chute.value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 40');
    document.getElementById('reiniciar').setAttribute('disabled', true);  // Desabilita botão "Novo Jogo"
}
