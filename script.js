let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let button = document.querySelector('.random');

// function: generate random hex color values
function randomColor() {
    // random color requires 2 values for start and end points, so this runs 2x
    for (var n=1;n<=2;n++){
        // generate hex value for color
       newColor = '#' + Math.random().toString(16).slice(2, 8);
        // assign color values to gradient start and end points
        n === 1 ? color1.value = newColor : color2.value = newColor;   
    }
    // call function to apply gradient values
    setGradient();
}

// function: set background color/gradient
function setGradient() {
    // console.log('color1: ' + color1.value)
    // console.log('color2: ' + color2.value)

    // build css gradient expression
    body.style.background = 'linear-gradient(to right, '
        + color1.value + ', '
        + color2.value + ')';

    // apply selected colors to button background for border effect
    color1.style.backgroundColor = color2.value;
    color2.style.backgroundColor = color1.value;

    // write css style to page
    css.textContent = body.style.background + ';';
}

 // set event listeners for buttons
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

button.addEventListener('click', randomColor);

// show background color on page load
body.addEventListener('load', setGradient());




