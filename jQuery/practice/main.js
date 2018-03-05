$(function () {
    var arr = ["https://static-s.aa-cdn.net/img/ios/1054617597/46c9514737ed8ca6f71653adcbaca1b6?v=1", "http://www.oregonscientificstore.com/images/category/icon/10.jpg", "https://pbs.twimg.com/profile_images/378800000408563964/e7d2325388a9ef442c43b4e81dc527c9_400x400.png", "https://static-s.aa-cdn.net/img/ios/1054617597/46c9514737ed8ca6f71653adcbaca1b6?v=1", "http://www.oregonscientificstore.com/images/category/icon/10.jpg", "https://pbs.twimg.com/profile_images/378800000408563964/e7d2325388a9ef442c43b4e81dc527c9_400x400.png"]

    for (var i = 0; i < arr.length; i++) {
        var img = $("<img>");
        img.attr("src", arr[i]);
        $("body").append(img);
    }

    var title = $("<h1>");
    title.text("IMAGE GALLERY");
    $("img:first").before(title);

    $('img').css('float','left');

    $("img").each(function () {
        var random = Number(Math.floor(Math.random()*500+100));
        $(this).width(random+"px");
    });

    $("img").each(function(index, element){
        
        if($(element).width() < 200){
            $(this).css('border','5px solid red');
            return false;
        }

    })

})