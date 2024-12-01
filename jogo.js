const todasAsCores = [
    'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 
    'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 
    'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 
    'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 
    'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 
    'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 
    'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 
    'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 
    'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 
    'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 
    'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 
    'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 
    'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 
    'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 
    'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 
    'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 
    'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 
    'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 
    'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 
    'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 
    'WhiteSmoke', 'Yellow', 'YellowGreen'
];

function escolherCoresAleatorias() {
    const coresEscolhidas = [];
    while (coresEscolhidas.length < 10) {
        const corAleatoria = todasAsCores[Math.floor(Math.random() * todasAsCores.length)];
        if (!coresEscolhidas.includes(corAleatoria)) {
            coresEscolhidas.push(corAleatoria);
        }
    }
    return coresEscolhidas;
}

const coresSorteadas = escolherCoresAleatorias();

document.getElementById("listaCores").textContent = coresSorteadas.join(", ");

const corEscolhida = coresSorteadas[Math.floor(Math.random() * coresSorteadas.length)];

function tentarAdivinhar() {
    const input = document.getElementById("corInput").value.trim();
    const feedback = document.getElementById("feedback");
    if (!input) {
        feedback.textContent = "Por favor, insira uma cor.";
        return;
    }
    if (!coresSorteadas.includes(input)) {
        feedback.textContent = `A cor "${input}" não está entre as cores disponíveis.`;
        return;
    }
    if (input === corEscolhida) {
        feedback.textContent = `Parabéns! Você acertou. A cor era "${corEscolhida}".`;
        document.body.style.backgroundColor = corEscolhida;
    } else {
        const dica = input < corEscolhida ? "vem depois" : "vem antes";
        feedback.textContent = `Você errou! Dica: a cor correta ${dica} de "${input}" na ordem alfabética.`;
    }
}
