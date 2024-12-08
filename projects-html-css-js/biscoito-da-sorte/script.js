const randomNumber = Math.round(Math.random() * 4)
function handleClick(event)
{
  event.preventDefault()
  const click = document.querySelector("#cookie")
  switch (Number(randomNumber))
  {
    case 0:
      document.querySelector(".sorte").innerText = "A vida trará coisas boas se tiver paciência."
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
    break;
    case 1:
      document.querySelector(".sorte").innerText = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
    break;
    case 2:
      document.querySelector(".sorte").innerText = "Não compense na ira o que lhe falta na razão."
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
    break;
    case 3:
      document.querySelector(".sorte").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda."
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
    break;
    case 4:
      document.querySelector(".sorte").innerText = "A maior de todas as torres começa no solo."
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
    break;
  }
}