const UIModule = (function () {

    function displayShows(singleShow) {
        let div = $(`<div id="${singleShow.id}" class="col-md-4 showDiv">`);
        let img = $(`<img class="img-fluid" src="${singleShow.image}">`);
        let title = $(`<a href="showInfoPage.html"><p>${singleShow.name}</p></a>`);
        let link = $(`<a href="showInfoPage.html"></a>`);
        link.append(img);
        div.append(link);
        div.append(title);


        $('div.row').append(div);
    };

    function showSearch(foundShow) {

        foundShow.forEach(show => {
            let liSearch = $(`<a id="${show.id}" class="searchList" href="showInfoPage.html">${show.name}</a>`);
            $('#myDropdown').append(liSearch);
            
        });
    
    }

    function displaySingleShow(show){
        let poster = $(`<img class="col-md-12" src="${show.image.original}">`);
        $('#poster').append(poster);
        $('#summary').append(`${show.summary}`);
        $('h1').append(`${show.name}`);

    }

    function displayCast(person){

        console.log(person);
        
        let li = $(`<li>${person.name}</li>`);
        $('#cast').append(li);

    }

    return {
        displayShows,
        showSearch,
        displaySingleShow,
        displayCast
    }

})();



