const mainModule = (function () {

    const initSingleShow = () => {

        let singleShowId = localStorage.getItem("showId");
        const singleShowRequest = $.get({
            url: `http://api.tvmaze.com/shows/${singleShowId}`
        })
        
        singleShowRequest.done(function (response) {
            UIModule.displaySingleShow(response);
        })

        const cast = $.get({
            url: `http://api.tvmaze.com/shows/${singleShowId}/cast`
        })
        
        cast.done(function(response){
            
            response.forEach(function(response){
                const { person } = response;
                UIModule.displayCast(person);
            })

        })
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

        const allShowsRequest = $.get({
            url: `http://api.tvmaze.com/shows`
        })

        allShowsRequest.done(function (response) {
            const shows = response.slice(0, 50);

            shows.forEach(function (show) {
                const singleShow = dataModule.createTVShows(show.id, show.name, show.image.original);
                UIModule.displayShows(singleShow);
            })

            $('.showDiv').on('click', switchToSingleShow);
        })

    }

    function searched() {

        const searchedShow = $('input').val();

        var request = $.get({
            url: `http://api.tvmaze.com/search/shows?q=${searchedShow}`
        });

        request.done(function (response) {
            $('#myDropdown').text("");

            const myShows = dataModule.searchedShows(response)
            UIModule.showSearch(myShows)

            $('.searchList').on('click', switchToSingleShow);
        });


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