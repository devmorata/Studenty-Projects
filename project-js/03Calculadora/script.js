/*
Capturar 2 números e fazer as operações matemáticas:
soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação, mostrar um alerta com o resultado.
*/

alert("Vamos realizar operções matemáticas")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let resultSoma = (Number(numberOne)+Number(numberTwo))
let resultSub = (Number(numberOne)-Number(numberTwo))
let resultMult = (Number(numberOne)*Number(numberTwo))
let resultDiv = (Number(numberOne)/Number(numberTwo))
let resultRest = (Number(numberOne)%Number(numberTwo))
let resultPar = ((Number(numberOne)+Number(numberTwo))%2)
alert("Soma: " + resultSoma)
alert("Subtração: " + resultSub) 
alert("Divisão: " + resultDiv.toFixed(2))
alert("Multiplicação: " + resultMult)
alert("Resto da divisão: " + resultRest)
if (resultPar == 0){
  alert("A soma dos números é par: " + resultSoma)
}
else{
  alert("A soma dos números é ímpar: " + resultSoma)
}
if (resultDiv == 1){
  alert("Os números são iguais: " + numberOne + ", " + numberTwo)
}
else{
  alert("Os números são diferentes: " + numberOne + ", " + numberTwo)
}
