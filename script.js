const button = document.querySelector('button');

function calcText(value) {
    console.log(value);
    const screen = document.getElementById('calculator-screen');
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
for(const buttons of calculatorButtons).foreach(buttons => {
    buttons.addEventListener('click', e => {
        console.log(1);
    })
}