function Program(date) {
    this.date = date;
}

var allPrograms = [];


document.querySelector('#button2').addEventListener('click', createProgram);

function createProgram(event) {

    // create li for program
    var newLi = document.createElement('li');
    var date = document.querySelector('#date').value;
    var liText = document.createTextNode(date + ', duration: TBA');
    newLi.appendChild(liText);
    var list = document.querySelector('#programList');
    list.appendChild(newLi);

    // make program object
    var program = new Program(date);
    allPrograms.push(program);

    // create program dropdown
    var numOfMovies = allMovies.length;

    var newO = document.createElement("option");
    var optValue = allMovies[numOfMovies-1].movieTitle;
    var optText = document.createTextNode(optValue);
    newO.appendChild(optText);
    var selectMovie = document.querySelector("#movie");
    selectMovie.appendChild(newO);

}