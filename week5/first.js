var hello = function (message) {
    console.log(message)
    };
hello("Hello world again");

var info = function(){
    console.log(navigator.userAgent);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);

    
    }
info()

var isOnline = function () {
    if(navigator.onLine == true){
        console.log("online");
    } else {console.log("offline");
    }
    
}

isOnline();

var screenSize = function(){
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    console.log(screen.width);
}

screenSize();


var loc = function(){
    console.log(location.href);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.search);
   }

loc();


//location.href = 'https://www.google.rs/';


// var locStor = function(key, value) {
//     localStorage.setItem(key, value);
//     sessionStorage.setItem(key, value);
// }

// locStor('kljuc', 'vrednost');

//////////////////// window methods  ////////////////////////////


/*var goBack = function(a) {
    history.go(a);
}
goBack(2);

function boo() {
    alert('esi mi dobar?');
}
setTimeout(boo, 2000);*/


alert('Hello!');
var answer = prompt('kako si?');
if(confirm('We will submit this answer now! ' + answer)) {
    alert('success');    
}



