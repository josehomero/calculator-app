const button = document.querySelector('button');

function calcText(value) {
    console.log(value);
    const screen = document.getElementById('calculator-screen');
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
    
        const one = e.button[1].value;
        console.log(1);
    });
});