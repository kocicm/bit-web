var backgroundPosition = 0;
var timer;
var run = false;

function runMario() {
    document.querySelector('#run').setAttribute('style', 'display: block');
    document.querySelector('#stand').setAttribute('style', 'display: none');

    timer = setInterval(function() {
        backgroundPosition -= 10;
        document.querySelector('body').setAttribute('style', 'background-position-x:' + backgroundPosition + 'px');
    }, 50);
    
}

function stopMario() {
    document.querySelector('#stand').setAttribute('style', 'display: block');
    document.querySelector('#run').setAttribute('style', 'display: none');
    clearInterval(timer);  
    
}


document.querySelector('body').addEventListener('keydown', function (event) {
    if (event.keyCode === 39 && run === false) {
        runMario();
        run = true;
    }
});

document.querySelector('body').addEventListener('keyup', function (event) {
    if (event.keyCode === 39 && run === true) {
        stopMario();
        run = false;
    }
}
);