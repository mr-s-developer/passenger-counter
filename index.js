
// let welcomeEl = document.getElementById("welcome-el")
// let username = "Sergey "
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + username
// welcomeEl.innerText += " 👋"

// ---

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

