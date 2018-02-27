function toRed() {
    document.getElementsByTagName("ul")[1].className = "red";

}
toRed();

function changeBg() {
    var liElements = document.getElementsByTagName('li');
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].className = 'blue';
    }

}
// changeBg();

function greenUpper() {
    var green = document.querySelectorAll("ul:nth-child(3) li");
    for (var i = 0; i < green.length; i++) {
        green[i].className = 'green';
    }
}
greenUpper();

function removeClass (){
    var el = document.getElementsByClassName("active")[0];
    el.className="";
    el.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className ="active";

}

removeClass();