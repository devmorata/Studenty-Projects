/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente
  e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo do IMC
*/

const patients = [
  {
    name:"Luiz",
    age: 20,
    weight: 100,
    height: 1.90
  },
  {
    name:"Silvia",
    age: 37,
    weight: 75,
    height: 1.62
  },
  {
    name:"Marcos",
    age: 58,
    weight: 84,
    height: 1.73
  }
]
 
function printPatientIMC(patient) {
  alert(`
    Paciente ${patient.name} possui o IMC de
    ${(patient.weight / (patient.height ** 2)).toFixed(2)}
`)
}

for (let patient of patients){
  printPatientIMC(patient)
}