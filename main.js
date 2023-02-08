// tady je místo pro náš program

let celeJmeno = prompt("Jaké je Vaše jméno a příjmení?");
let vek = Number(prompt("Kolik je Vám let"))

let vysledek = document.querySelector(".vysledek")

vysledek.innerHTML = "Jmenuji se " + celeJmeno +" a je mi " + vek + " let."

let oblibenaBarva = prompt("What is your favourite color?")

vysledek.style.color = oblibenaBarva