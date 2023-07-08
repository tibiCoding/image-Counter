// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

console.log(countEl)

let username = "tim"
let message = "You have three new notifications"
let messageToUser = message + ", " + "!"

let name = "Sir or Madam"
let greeting = "Welcome back "

let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText = greeting + name + "👋"

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")


let count = 0

function increment1() {
  count = count +1
  countEl.innerText = count
}
function increment5() {
  count = count +5
  countEl.innerText = count
}
function increment10() {
  count = count +10
  countEl.innerText = count
}
function increment100() {
  count = count +100
  countEl.innerText = count
}

function saveCount() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  count = 0
  countEl.innerText = count
  console.log(count)
}

function registerName() {
  let firstName = document.getElementById("fname").value
  let lastName = document.getElementById("lname").value
  name = firstName + " " + lastName
  welcomeEl.innerText = greeting + name + "👋"
  console.log(firstName)
}

function registerCustomCount() {
  count = document.getElementById("cCount").value
  countEl.innerText = count
  document.getElementById("cCount").value = ""
}