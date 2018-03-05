$(function(){
    console.log('Hello, world!');

    $("li:first").addClass("bottomBorder");
    $("li").addClass("toUpperCase");
    $("li:active").addClass("fontColor");
    var middle = ($('li').length - 1) / 2;
    $("li:eq("+middle+")").addClass("backgroundColor");
})

