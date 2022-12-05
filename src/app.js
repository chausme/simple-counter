// set initial count
let count = 0;

// select value and buttons
const counterValue = document.querySelector('#counter');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const classes = e.currentTarget.classList;
        if (classes.contains('decrease')) {
            count -= 1;
        } else if (classes.contains('increase')) {
            count += 1;
        } else {
            count = 0;
        }
        if (count > 0) {
            counterValue.style.color = 'green';
        }
        if (count < 0) {
            counterValue.style.color = 'red';
        }
        if (count === 0) {
            counterValue.style.color = 'black';
        }
        counterValue.textContent = count;
    });
});
