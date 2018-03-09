const UIModule = (function () {

    function displayShows(singleShow) {
        let div = $(`<div class="col-md-4">`);
        let img = $(`<img class="img-fluid" src="${singleShow.image}">`);
        let title = $(`<p>${singleShow.name}</p>`);
        div.append(img);
        div.append(title);

        $('div.row').append(div);
    };


    return {
        displayShows
        // displaySingleShow
    }

})();


// function showSearch(event) {

//     event.preventDefault();  // !!!

//     const searchedShow = $('input').val();

//     var request = $.get({
    //         url: `http://api.tvmaze.com/search/shows?q=${searchedShow}`
    //     });

    //     request.done(response => console.log(response));

    // }
    // $('input').keyup(showSearch);

