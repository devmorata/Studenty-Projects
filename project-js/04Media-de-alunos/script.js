/*
Solicitar o nome do aluno e as 3 notas do bimestre e calcular
a média daquele aluno.

Se o aluno passou do bimestre, dar os parabens.

Se o aluno foi reprovado, motivar o aluno a dar seu melhor
na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studanty = prompt("Digite o nome do aluno(a)")
let noteOne = prompt("Nota do 1º bimestre:")
let noteTwo = prompt("Nota do 2º bimestre:")
let noteTree = prompt("Nota do 3º bimestre:")
let media = ((Number(noteOne)+Number(noteTwo)+Number(noteTree))/3)
let result = media >= 6
if (result) {
alert("Parabéns, "+studanty + "! Sua média foi de: " + media + ". Você está aprovado(a)!")
}
else {
alert(studanty + ", sua nota foi " + media + ". Você está reprovado(a). Esperamos que dê o seu melhor na prova de recuperação!")
} 
