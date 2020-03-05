

const button = document.querySelector('button');

const button1 = document.getElementById('number-button');

function addText(e) {
    const screen = document.getElementById('calculator-screen');
    screen.textContent = e.target.value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
for(const buttons of calculatorButtons) {
    buttons.addEventListener('click', function(e) {
        console.log(e.target.textContent);
    });
}


