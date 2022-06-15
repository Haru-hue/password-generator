const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
 "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const checkboxes = document.querySelectorAll(".grid > .password")
const circle = document.querySelector(".toggler--slider--circle")
var numberInput = document.querySelector("#numbers")
var symbolInput = document.querySelector("#symbols")

function getValues () {
    let newVal = []
    let lettersArr = characters.slice(0,52)
    let numberArr = characters.slice(52, 62)
    let symbolArr = characters.slice(63, 91)
    if(numberInput.checked && symbolInput.checked) newVal = characters
    else if (numberInput.checked && !symbolInput.checked) newVal = [...lettersArr, ...numberArr]
    else if (!numberInput.checked && symbolInput.checked) newVal = [...lettersArr, ...symbolArr]
    else newVal = characters.slice(0, 51)

    return newVal
}

function generateRandomCharacter () {   
    let newVal = getValues()
    let randomNumber = Math.floor(Math.random() * newVal.length)
    return newVal[randomNumber]
}

function generatePass () {
    let password = ''
    let length = value.valueAsNumber
    for (let i = 0; i < length; i++) {
        password+= generateRandomCharacter()
    }
    return password
}

function generate () {
    checkboxes.forEach((button) => {
        button.textContent = generatePass()
    })
}

document.querySelector(".btn-generate").onclick = generate

const allClasses = ["toggler--slider", "toggler--slider--circle", ".body",
                    ".toggler--:first-child", ".toggler--:last-child"]

function toggle() {
    document.querySelectorAll(".toggler--slider, .toggler--slider--circle, .body,\
    .toggler--:first-child, .toggler--:last-child").forEach(item => {
        item.classList.toggle("dark")
    })
}

circle.onclick = toggle

var value = document.getElementById("p-length")

function showVal (newVal) {
    document.querySelector("label span").innerHTML = newVal
}

value.addEventListener("change", (event) => {
    showVal(event.target.value)
})

function handleChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

value.addEventListener("input", handleChange)
