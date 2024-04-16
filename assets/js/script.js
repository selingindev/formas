function calcularAreaCirculo() {
  var raio = parseFloat(document.getElementById("raio").value);
  var area = Math.PI * raio * raio;
  document.getElementById("resultado").innerHTML = "Área: " + area.toFixed(2);
}

function calcularAreaCubo() {
  var lado = parseFloat(document.getElementById("lado").value);
  var area = 6 * lado * lado;
  document.getElementById("resultado").innerHTML = "Área de Superfície: " + area.toFixed(2);
}

function calcularAreaCuboide() {
  var comprimento = parseFloat(document.getElementById("comprimento").value);
  var largura = parseFloat(document.getElementById("largura").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = 2 * (comprimento * largura + comprimento * altura + largura * altura);
  document.getElementById("resultado").innerHTML = "Área de Superfície: " + area.toFixed(2);
}

function calcularAreaPoligono() {
  const tipoPoligono = document.getElementById("poligono").value;
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  const input3 = parseFloat(document.getElementById("input3").value);

  let area = 0;

  switch (tipoPoligono) {
      case "triangulo":
          area = calcularAreaTriangulo(input1, input2);
          break;
      case "trapezio":
          area = calcularAreaTrapezio(input1, input2, input3);
          break;
      case "pentagono":
          area = calcularAreaPentagono(input1, input2, input3);
          break;
      default:
          break;
  }

  document.getElementById("resultado").innerText = "Área: " + area.toFixed(2);
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaPentagono(perimetro, apotema, lado) {
  return (perimetro * apotema) / 2;
}

document.addEventListener("DOMContentLoaded", function () {
  const tipoPoligonoSelect = document.getElementById("poligono");
  tipoPoligonoSelect.addEventListener("change", function () {
      const tipoPoligono = tipoPoligonoSelect.value;
      const labelInput3 = document.getElementById("inputs").querySelector("label[for=input3]");
      const input3 = document.getElementById("input3");

      switch (tipoPoligono) {
          case "triangulo":
              labelInput3.style.display = "none";
              input3.style.display = "none";
              break;
          case "trapezio":
              labelInput3.style.display = "block";
              input3.style.display = "block";
              labelInput3.innerText = "Altura:";
              break;
          case "pentagono":
              labelInput3.style.display = "block";
              input3.style.display = "block";
              labelInput3.innerText = "Apótema:";
              break;
          default:
              break;
      }
  });
  })

function calcularAreaQuadrado() {
  var lado = parseFloat(document.getElementById("lado").value);
  var area = lado * lado;
  document.getElementById("resultado").innerHTML = "Área: " + area.toFixed(2);
}

function calcularAreaRomboedro() {
  var diagonalMaior = parseFloat(document.getElementById("diagonalMaior").value);
  var diagonalMenor = parseFloat(document.getElementById("diagonalMenor").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = 2 * (diagonalMaior * diagonalMenor) + 2 * (diagonalMaior * altura) + 2 * (diagonalMenor * altura);
  document.getElementById("resultado").innerHTML = "Área de Superfície: " + area.toFixed(2);
}

function calcularAreaTrapezio() {
  var baseMaior = parseFloat(document.getElementById("baseMaior").value);
  var baseMenor = parseFloat(document.getElementById("baseMenor").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = ((baseMaior + baseMenor) / 2) * altura;
  document.getElementById("resultado").innerHTML = "Área: " + area.toFixed(2);
}

