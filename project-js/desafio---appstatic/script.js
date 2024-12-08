const studantys = [
  {
    Name: "Pedro",
    p1: 10,
    p2: 8,
    p3: 9,
    p4: 7
  },
  {
    Name: "Miguel",
    p1: 5,
    p2: 3,
    p3: 6,
    p4: 2
  },
  {
    Name: "Beatriz",
    p1: 8,
    p2: 8,
    p3: 7,
    p4: 9
  },
  {
    Name: "Elis",
    p1: 0,
    p2: 2,
    p3: 3,
    p4: 6
  }
]
for(let studanty of studantys){
  let media = ((studanty.p1+studanty.p2+studanty.p3+studanty.p4)/4).toFixed(2)
    if (media >= 6){
      alert(`
        Aluno: ${studanty.Name}\n
        Media: ${media}\n
        Parabéns, você foi aprovado(a!
      `)
    }

    else{
      alert(`
      Aluno: ${studanty.Name}\n
      Media: ${media}\n
      Parabéns, você é burro(a)!
    `)
    }
  }
