$(document).ready(function () {
    $("img").css({
        "width": "33%"
    })

    $("img:first").addClass("selected");
    
    /*
    $(".selected").removeClass("selected");
    $('img').eq(4).addClass("selected");
    */
    $(".selected").removeClass("selected").parent().next().children().eq(1).addClass("selected");
    console.log($(".selected").removeClass("selected").parent().siblings().eq(0));
    
    $(".selected").css({
        "border": "10px solid red"
    })


    $('#container').imagesLoaded( function() {
        // images have loaded
      });
      
      // options
      $('#container').imagesLoaded( {
        // options...
        },
        function() {
          // images have loaded
        }
      );
})