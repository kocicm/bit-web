document.querySelector('#add').addEventListener('click', addFunction);
var numOfPassed = 0;
var numOfFailed = 0;


function addFunction(event) {
    var totalNum = Number(numOfPassed) + Number(numOfFailed);
    var percentage1 = Number(numOfFailed) / Number(totalNum);


    var name = document.querySelector('#fullname').value;

    //validation
    var error1 = document.querySelector('#error1');
    if (name === "") {
        error1.textContent = 'Please enter full name';
        return false;
    } else {
        error1.textContent = '';
    }
    

    // create li for passed and failed
    var grade = document.querySelector('#grade').value;


    if (grade == "6" || grade == "7" || grade == "8" || grade == "9" || grade == "10") {
        var newLiP = document.createElement('li');
        var liPassed = document.createTextNode(name);
        newLiP.appendChild(liPassed);
        var listP = document.querySelector('#liPassed');
        listP.appendChild(newLiP);
        numOfPassed++;
    } else if (grade == "5") {
        var newLiF = document.createElement('li');
        var liFailed = document.createTextNode(name);
        newLiF.appendChild(liFailed);
        var listF = document.querySelector('#liFailed');
        listF.appendChild(newLiF);
        numOfFailed++;
    }
    var totalNum = Number(numOfPassed) + Number(numOfFailed);
    var percentage = (Number(numOfFailed) / Number(totalNum)*100).toFixed()+"%";
    document.querySelector('#totalNum').textContent = totalNum;
    document.querySelector('#numOfPassed').textContent = numOfPassed;
    document.querySelector('#numOfFailed').textContent = numOfFailed;
    document.querySelector('#percent').textContent = percentage;
    document.querySelector('#fullname').value = "";
    document.querySelector('#grade').value = "";
    document.querySelector('select').selectedIndex = "0";
}