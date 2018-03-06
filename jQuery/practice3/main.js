$(document).ready(function () {

  var a = [
    'https://via.placeholder.com/350x150',
    'https://via.placeholder.com/350x150',
    'https://via.placeholder.com/350x150',
    'https://via.placeholder.com/350x150',
    'https://via.placeholder.com/350x150',
    'https://via.placeholder.com/350x150'
  ]

  for (var i = 0; i < a.length; i++) {
    $('body').append('<img src=' + a[i] + ' />');

  }

  $('img').css('float', 'left');
  
  $('img').each(function (i, e) {
    $(e).attr('src', a[i]);
    $(e).attr('height', Math.random() * (100 - 500) + 100);
    $(e).attr('width', Math.random() * (150 - 500) + 150);

  });



});
