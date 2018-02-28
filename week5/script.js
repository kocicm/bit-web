function move() {
    var border = document.querySelector('img:nth-of-type(2)');
    border.className = '';
    border.parentElement.nextElementSibling.firstElementChild.nextElementSibling.className = 'selected';
};
move();

function alert1() {
    alert(document.querySelector("li").textContent)
};
alert1();
function replace1(sometext) {
    var replaced = document.querySelector("li:last-of-type");
    replaced.textContent = sometext;

};

replace1("surprise");

function select1(arr, place) {
    var newEl = document.createElement('select');

    for (var i = 0; i < arr.length; i++) {
        var newEl2 = document.createElement('option');
        var optionText = document.createTextNode(arr[i]);

        newEl2.appendChild(optionText);
        newEl.appendChild(newEl2);

    }
    place.appendChild(newEl);


}
select1(["volvo", "mercedes", "saab", "audi"], document.querySelector('div'));


function select2() {

    document.querySelector('div:nth-of-type(2)').innerHTML = "<select><option>Volvo</option><option>Saab</option><option>Mercedes</option><option >Audi</option></select>";

}
select2();