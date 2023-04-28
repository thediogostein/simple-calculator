const btnCalcular = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");
const btnClearAll = document.querySelector("#clear-all");

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  let a = document.querySelector("#number-1").value;
  const operador = document.querySelector("#operador").value;
  const b = document.querySelector("#number-2").value;
  mostrarResultado(calcular(a, b, operador));
});

btnClearAll.addEventListener("click", () => {
  document.querySelector("form").reset();
  resultado.innerText = "-";
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
  a = Number(a);
  b = Number(b);
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
