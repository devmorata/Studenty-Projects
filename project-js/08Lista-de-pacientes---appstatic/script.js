/*

Crie uma lista de pacientes

Cada paciente deverá conter:
  nome
  idade 
  peso
  altura

Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name:"Luiz",
    age: "20 anos",
    weight: "100 kg",
    height: "1.90 cm"
  },
  {
    name:"Silvia",
    age: "37 anos",
    weight: "75 kg",
    height: "1.62 cm"
  },
  {
    name:"Marcos",
    age: "58 anos",
    weight: "84 kg",
    height: "1.73cm"
  }
]

let patientsNames = []


//para cada paciente em pacientes
for(let patient of patients) {
  patientsNames.push(patient.name)
  patientsNames.push(patient.age)
  patientsNames.push(patient.weight)
  patientsNames.push(patient.height)
}

alert(patientsNames)