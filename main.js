const btnCalcular = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", (e) => {
  const a = +document.querySelector("#number-1").value;
  const operador = document.querySelector("#operador").value;
  const b = +document.querySelector("#number-2").value;
  const total = calcular(a, b, operador);
  mostrarResultado(total);
  e.preventDefault();
});

function mostrarResultado(total) {
  resultado.innerText = total;
}

function somar(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function calcular(a, b, operador) {
  switch (operador) {
    case "+":
      return somar(a, b);
      break;
    case "-":
      return subtracao(a, b);
      break;
    case "*":
      return multiplicao(a, b);
      break;
    case "/":
      return divisao(a, b);
      break;
  }
}
