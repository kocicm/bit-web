
class Movie {
    constructor(movieTitle, movieLength, movieGenre) {
        this.movieTitle = movieTitle;
        this.movieLength = movieLength;
        this.movieGenre = movieGenre;
    }
}

var allMovies = [];


$('#button').on('click', createMovie);

function createMovie(event) {

    // take val()s from input
    let movieTitle = $("#title").val();
    let movieLength = $("#length").val();
    let select = $('#genre option:selected').val();
    let movieGenre = select[0] + select[select.length - 1];
    const selectedIndex = $('#genre').prop('selectedIndex');


    //validation
    let error1 = $('#error1');
    if (movieTitle === "") {
        error1.text('Please enter movie title');
        return false;
    } else {
        error1.text('');
    }

    let error2 = $('#error2');
    if (movieLength === "" || movieLength <= 0) {
        error2.text('Please enter correct movie length in minutes');
        return false;
    } else {
        error2.text('');
    }

    let error3 = $('#error3');
    if (select === "-") {
        error3.text('Please choose genre');
        return false;
    } else {
        error3.text('');
    }


    // make movie object
    let movie = new Movie(movieTitle, movieLength, movieGenre);
    allMovies.push(movie);

    //create li and append to ul
    let newLi = $('<li>');
    newLi.text(`${movieTitle}, ${movieLength} min, ${movieGenre.toUpperCase()}`);
    $('#movLi').append(newLi);

    // empty form
    $("#title").val("");
    $("#length").val("");
    $('#genre').val("-");

    // all length
    let totalLength = 0;
    for (let i = 0; i < allMovies.length; i++) {
        let n = Number(allMovies[i].movieLength);
        totalLength += n;
    }
    $("#span1").text(`${totalLength} min`);


    // create movie dropdown
    let numOfMovies = allMovies.length;

    let newO = $("<option>");
    let optvalue = allMovies[numOfMovies - 1].movieTitle;
    newO.text(optvalue);
    $("#movie").append(newO);
}

