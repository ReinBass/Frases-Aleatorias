const frases = [
    "Um céu é uma floresta densa de mistérios aguardando para serem desvendados.",
    "A natureza é um oceano vasto de maravilhas esperando para serem exploradas.",
    "Uma montanha é uma fortaleza imponente de desafios esperando para serem conquistados.",
    "O amor é um jardim florido de emoções esperando para serem cultivadas.",
    "Um sorriso é um raio de sol brilhante de alegria espalhando-se para ser compartilhada.",
    "A música é uma sinfonia celestial de notas fluindo para serem apreciadas.",
    "Uma jornada é uma estrada sinuosa de aventuras esperando para serem vividas.",
    "A amizade é uma âncora firme de apoio esperando para ser compartilhada.",
    "Um livro é um tesouro precioso de conhecimento esperando para ser descoberto.",
    "Um sonho é uma estrela cadente de possibilidades esperando para serem alcançadas."
];

function setFrase() {
let indiceAleatorio = Math.floor(Math.random() * frases.length);
let fraseAleatoria = frases[indiceAleatorio];
document.getElementById("frase").textContent = fraseAleatoria;
}
setFrase();
document.getElementById('button').addEventListener('click', setFrase);