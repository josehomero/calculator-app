const button = document.querySelector('button');

function calcText(value) {
    const screen = document.getElementById('calculator-screen');
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
for(const buttons of calculatorButtons) {
    buttons.addEventListener('click', function(e) {
        e.preventDefault;

        var one = document.getElementById('one-button');
        calcText(one.value);
        one.value = '1';

        var two = document.getElementById('two-button');
        calcText(two.value);
        two.value = '2';

        var three = document.getElementById('three-button');
        calcText(three.value);
        three.value = '3';

        var four = document.getElementById('four-button');
        calcText(four.value);
        four.value = '4';

        var five = document.getElementById('five-button');
        calcText(five.value);
        five.value = '5';

        var six = document.getElementById('six-button');
        calcText(six.value);
        six.value = '6';

        var seven = document.getElementById('seven-button');
        calcText(seven.value);
        seven.value = '7';

        var eight = document.getElementById('eight-button');
        calcText(eight.value);
        eight.value = '8';

        var nine = document.getElementById('nine-button');
        calcText(nine.value);
        nine.value = '9';
    })
}