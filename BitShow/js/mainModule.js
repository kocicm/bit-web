const mainModule = (function () {

        const initSingleShow = () => {

            let singleShowId = localStorage.getItem("showId");
            fetch(`http://api.tvmaze.com/shows/${singleShowId}`)
                .then(function (response) {
                    return response.json();

                })
                .then(function (responseJson) {
                    UIModule.displaySingleShow(responseJson);
                })
            /* const singleShowRequest = $.get({
                url: `http://api.tvmaze.com/shows/${singleShowId}`
            }) */

            /* singleShowRequest.done(function (response) {
                UIModule.displaySingleShow(response);
            }) */

            fetch(`http://api.tvmaze.com/shows/${singleShowId}/cast`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (responseJson) {
                    responseJson.forEach(function (response) {
                        const {
                            person
                        } = response;
                        UIModule.displayCast(person);
                    })
                })

            // const cast = $.get({
            //     url: `http://api.tvmaze.com/shows/${singleShowId}/cast`
            // })

            // cast.done(function(response){

            //     response.forEach(function(response){
            //         const { person } = response;
            //         UIModule.displayCast(person);
            //     })

            // })
            // get show from localStorage
            // populate html with that object
        }

        function myFunction() {

            $('#myInput').on('click', function () {
                $('#myDropdown').toggleClass("show");
            })

            $('input').keyup(searched);
        }
        //----------------------------------

        function allShows() {

            fetch(`http://api.tvmaze.com/shows`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (responseJson) {
                    return responseJson.slice(0, 50);
                })
                .then(function (shows) {
                    shows.forEach(function (show) {
                        const singleShow = dataModule.createTVShows(show.id, show.name, show.image.original);
                        UIModule.displayShows(singleShow);
                    })
                    $('.showDiv').on('click', switchToSingleShow);
                })



        }

        function searched() {

            const searchedShow = $('input').val();

            fetch(`http://api.tvmaze.com/search/shows?q=${searchedShow}`)
                .then(function (response) {
                    $('#myDropdown').text("");
                    return response.json();
                })
                .then(function (responseJson){
                    const myShows = dataModule.searchedShows(responseJson)
                    UIModule.showSearch(myShows)

                    $('.searchList').on('click', switchToSingleShow);

                })

            // request.done(function (response) {
            //     $('#myDropdown').text("");
   


}

function switchToSingleShow(event) {

    const showId = $(this).attr('id');
    localStorage.setItem('showId', showId);

}

return {
    myFunction,
    allShows,
    switchToSingleShow,
    searched,
    initSingleShow
}


})(dataModule, UIModule);

// const seasonsRequest = $.get({
//     url: `http://api.tvmaze.com/shows/${}/seasons`
// })

// seasonsRequest.done(function (seasons) {
//     const shows = response.slice(0, 50);
// UIModule.displaySingleShow();

//     shows.forEach(function (show) {
//         const singleShow = dataModule.createTVShows(show.id, show.name, show.image.original);
//         UIModule.displayShows(singleShow);
//     })
// }

// const castRequest