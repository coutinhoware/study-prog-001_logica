alert("Boas-vindas ao jogo do número secreto!");
let limiteSuperior = 100;
let numeroSecreto = parseInt(Math.random() * limiteSuperior + 1);
console.log("Número secreto: " + numeroSecreto);

let chute;
console.log("Chute: " + chute);
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${limiteSuperior}`);
  if (chute == numeroSecreto) {
    break;
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`
);

// if (tentativas > 1) {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`
//   );
// } else {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`
//   );
// }
