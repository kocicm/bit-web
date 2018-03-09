class Program {
    constructor(date) {
        this.date = date;
        this.movieList = [];
    }
}

var allPrograms = [];

// button CREATE PROGRAM   
$('#button2').on('click', createProgram);

function createProgram(event) {

    let date = $('#date').val();

    //validation
    let error4 = $('#error4');
    if (date === "") {
        error4.text('Please choose date');
        return false;
    } else {
        error4.text('');
    }

    // create li for program
    let newLi = $('<li>');
    newLi.text(`${date}, duration: TBA`);
    $('#programList').append(newLi);

    // make program object
    let program = new Program(date);
    allPrograms.push(program);

    // create program dropdown
    let numOfPrograms = allPrograms.length;

    let newP = $("<option>");
    // let optValue = allPrograms[numOfPrograms - 1].date;
    // let optText = document.createTextNode(optValue);
    newP.text(allPrograms[numOfPrograms - 1].date);
    $("#program").append(newP);

}

// button ADD MOVIE
$('#button3').on('click', addMovie);

function addMovie(event) {
    // let select = $('#genre option:selected').val();

    let selectP = $('#program option:selected').val();
    // const selectedIndex = $('#genre').prop('selectedIndex');
    let optionP = $('#program').prop('selectedIndex');// program index in select list
    // console.log(optionP);
    
    let pDate = allPrograms[optionP - 1].date;  // program date

    let selectM = $('#movie option:selected').val();
    let optionM = $('#movie').prop('selectedIndex');

    allPrograms[optionP - 1].movieList.push(allMovies[optionM - 1]);  // add movie to program

    let pMovies = allPrograms[optionP - 1].movieList.length;  // num of movies for that program

    // all length minutes
    let totalLengthP = 0;
    for (let i = 0; i < pMovies; i++) {
        let n = Number(allPrograms[optionP - 1].movieList[i].movieLength);
        totalLengthP += n;
    }

    //update program data
    $(`#programList li:nth-child(${optionP})`).text(`${pDate}, ${pMovies} movies, duration: ${totalLengthP} min`);

}