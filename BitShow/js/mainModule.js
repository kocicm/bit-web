const mainModule = (function () {

    const allShowsRequest = $.get({
        url: `http://api.tvmaze.com/shows`
    })

    allShowsRequest.done(function (response) {
        const shows = response.slice(0, 50);

        shows.forEach(function (show) {
            const singleShow = dataModule.createTVShows(show.id, show.name, show.image.original);
            UIModule.displayShows(singleShow);
        })

        $('img').on('click', switchToSingleShow);
    })

    function switchToSingleShow(event) {

        console.log(event)
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
    }


})(dataModule, UIModule);