$(document).ready(function () {
    var player = $("img");
    $("img").css({
        "position": "absolute",
        "top": "52%",
        "left": "48%"
    })
    
    var numOfClicks = 0;

    $('body').on("click", function (e) {
        if (numOfClicks % 2 == 0) {
            player.offset({ top: e.pageY - 30, left: e.pageX - 30 });
            
            console.log(numOfClicks);
        }
        numOfClicks++;
    })

})

