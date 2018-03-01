var backgroundPosition = 0;
var timer;

function runMario() {
    document.querySelector('#run').setAttribute('style', 'display: block');
    document.querySelector('#stand').setAttribute('style', 'display: none');

    timer = setInterval(function() {
        backgroundPosition -= 10;
        document.querySelector('body').setAttribute('style', 'background-position-x:' + backgroundPosition + 'px');
    }, 50);
}

function stopMario() {
     history.go(0)
    
}


document.querySelector('body').addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
        runMario();
    }
});

document.querySelector('body').addEventListener('keyup', function (event) {
    if (event.keyCode === 39) {
        stopMario();
    }
}
);