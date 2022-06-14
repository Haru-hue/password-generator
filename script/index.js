const arrNames = "~!/]@#$%^&*(){}<>_-?.[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const checkboxes = document.querySelectorAll(".grid > .password")
const circle = document.querySelector(".toggler--slider--circle")

function generatePass () {
    let password = ''
    for (let i = 0; i < 8; i++) {
        password += arrNames.charAt(Math.floor(Math.random() * arrNames.length))
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

function copyText () {
    checkboxes.forEach(item => {
        item.addEventListener('click', () => {
            document.execCommand("copy")
        })

        item.addEventListener("copy", function(event) {
            event.preventDefault();
            if (event.clipboardData) {
              event.clipboardData.setData("text/plain", item.textContent);
              console.log(event.clipboardData.getData("text"))
            }
          });

    })
}

