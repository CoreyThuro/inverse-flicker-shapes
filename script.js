const body = document.body;
const square = document.querySelector('.square');

let isWhite = true;
let isCircle = false;

setInterval(() => {
    if (isWhite) {
        body.style.backgroundColor = 'white';
        square.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'black';
        square.style.backgroundColor = 'white';
    }
    isWhite = !isWhite;
}, 35); // Adjust the interval to control the speed of flickering

function toggleShape() {
    if (isCircle) {
        square.style.borderRadius = '0%'; // Change back to square
    } else {
        square.style.borderRadius = '50%'; // Change to circle
    }
    isCircle = !isCircle;
}

setInterval(toggleShape, 3000); // Change shape every 2 seconds
