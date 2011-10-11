$(document).ready(function(){
  $('.scale a').click(function(){
    var scale_value = $(this).text();
    var existing_width = $('.img_left').width();
    var new_width = existing_width/scale_value;
    $('.img_left').css('width',new_width+'px');
  });
});
