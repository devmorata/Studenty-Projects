/*

Faça um programa que tenha um menu e apresente a seguinte
mensagem:

Olá usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadstrados
  3. Sair do programa

___
O programa deverá capturar o número digitado pelo usuário e
mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item na lista
Caso o usuário digite 2, ele poderá veros iten cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
let option
let items = []

while(option != 3) {

  option = Number(prompt(`Olá usuário! Digite a opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa`))

  switch(option) {
    case 1:
      let item = prompt("Digit e o nome do item")
      items.push(item)
    break;
    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else{
        alert(items)
      }
    break;
    case 3:
      alert("Tchau!")
    break;
    default:
      alert("Opção inválida, tente novamente")
  }

}