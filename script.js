const screen = document.getElementById('calculator-screen');

const button = document.querySelector('button');

const button1 = document.getElementById('number-button');

button1.addEventListener('click', function(e) {
console.log(e.target.textContent);
})

