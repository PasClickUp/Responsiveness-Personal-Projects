const screen = document.querySelector('input')
const button = document.querySelectorAll('.button')

for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*'
        }
        if (buttonText == '÷') {
            buttonText = '/'
        }
        screen.value += buttonText
    })
}

function C() {
    screen.value = ''
}

function pi() {
    screen.value = 3.14
}

function del() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2)
}

function sin() {
    screen.value = Math.sin(screen.value)
}

function cos() {
    screen.value = Math.cos(screen.value)
}

function tan() {
    screen.value = Math.tan(screen.value)
}

function e() {
    screen.value = 2.72
}

function log() {
    screen.value = Math.log(screen.value)
}

function asin() {
    screen.value = Math.asin(screen.value)
}

function acos() {
    screen.value = Math.acos(screen.value)
}

function atan() {
    screen.value = Math.atan(screen.value)
}

function pow() {
    screen.value = Math.pow(screen.value, screen.value)
}

function pow2() {
    screen.value = Math.pow(screen.value, 2)
}

function pow1() {
    screen.value = Math.pow(screen.value, -1)
}

function cosh() {
    screen.value = Math.cosh(screen.value)
}
function tanh() {
    screen.value = Math.tanh(screen.value)
}