const dataModule = (function () {
    let allShows = [];

    class TVShows {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }

    function createTVShows(id, name, image) {
        const TVShow = new TVShows(id, name, image);
        allShows.push(TVShow);
        return TVShow;
    }
    //-----------------------------------------------

    function searchedShows(showsData) {
        return showsData.map(function (showWrap) {
            const { show } = showWrap;
            return new TVShows(show.id, show.name, show.image);
        })
    }


    return {
        createTVShows,
        searchedShows,
        allShows,
        
    }
})();