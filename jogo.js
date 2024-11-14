// Array com 10 cores possíveis
const coresPossiveis = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'brown', 'gray', 'black'];

// Função para escolher 3 cores aleatórias
function escolherCoresAleatorias() {
    const coresEscolhidas = [];
    while (coresEscolhidas.length < 3) {
        const corAleatoria = coresPossiveis[Math.floor(Math.random() * coresPossiveis.length)];
        if (!coresEscolhidas.includes(corAleatoria)) {
            coresEscolhidas.push(corAleatoria);
        }
    }
    return coresEscolhidas;
}

let coresSorteadas = escolherCoresAleatorias();  // Agora vai sortear 3 cores
let tentativas = 3;

// Função chamada quando o usuário tenta adivinhar
function tentarAdivinhar() {
    const corInput = document.getElementById('corInput').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');
    const tentativasText = document.getElementById('tentativas');
   
    // Verifica se o usuário digitou algo
    if (corInput === "") {
        resultado.textContent = "Por favor, digite uma cor.";
        return;
    }

    console.log(coresSorteadas)

    // Verifica se a cor está na lista das cores sorteadas
    if (coresSorteadas.includes(corInput)) {
        // Se acertar, muda o fundo da tela para a cor escolhida
        document.body.style.backgroundColor = corInput;
        resultado.textContent = `Parabéns! Você acertou a cor ${corInput}.`;
        tentativasText.textContent = "Você acertou!";
        return;
    }

    // Caso contrário, diminui o número de tentativas
    tentativas--;
    if (tentativas > 0) {
        resultado.textContent = `Você errou! Tente novamente.`;
        tentativasText.textContent = `Tentativas restantes: ${tentativas}`;
    } else {
        resultado.textContent = `Você perdeu! A cor era: ${coresSorteadas[Math.floor(Math.random() * coresSorteadas.length)]}`;
        tentativasText.textContent = "Fim de jogo!";
    }

    // Limpa o campo de input
    document.getElementById('corInput').value = "";
}
