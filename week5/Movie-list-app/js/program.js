function Program(date) {
    this.date = date;
    this.movieList = [];
}

var allPrograms = [];

// button CREATE PROGRAM   
document.querySelector('#button2').addEventListener('click', createProgram);

function createProgram(event) {

    var date = document.querySelector('#date').value;

    //validation
    var error4 = document.querySelector('#error4');
    if (date === "") {
        error4.textContent = 'Please choose date';
        return false;
    } else {
        error4.textContent = '';
    }

    // create li for program
    var newLi = document.createElement('li');
    var liText = document.createTextNode(date + ', duration: TBA');
    newLi.appendChild(liText);
    var list = document.querySelector('#programList');
    list.appendChild(newLi);

    // make program object
    var program = new Program(date);
    allPrograms.push(program);

    // create program dropdown
    var numOfPrograms = allPrograms.length;

    var newP = document.createElement("option");
    var optValue = allPrograms[numOfPrograms-1].date;
    var optText = document.createTextNode(optValue);
    newP.appendChild(optText);
    var selectProgram = document.querySelector("#program");
    selectProgram.appendChild(newP);

}

// button ADD MOVIE
document.querySelector('#button3').addEventListener('click', addMovie);

function addMovie(event){

    var selectP = document.querySelector('#program');
    var optionP = selectP.selectedIndex;// program index in select list

    var pDate = allPrograms[optionP-1].date;  // program date
    
    var selectM = document.querySelector('#movie');
    var optionM = selectM.selectedIndex;
    
    allPrograms[optionP - 1].movieList.push(allMovies[optionM - 1]);  // add movie to program

    var pMovies = allPrograms[optionP - 1].movieList.length;  // num of movies for that program

    // all length minutes
    var totalLengthP = 0;
    for (var i = 0; i < pMovies; i++) {
        var n = Number(allPrograms[optionP - 1].movieList[i].movieLength);
        totalLengthP += n;
    }

    //update program data
    var selector = '#programList li:nth-child(' + optionP + ')';
    var programComplete = document.querySelector(selector);
    programComplete.innerHTML = pDate + ', ' + pMovies + ' movies, duration: ' + totalLengthP + 'min';

}