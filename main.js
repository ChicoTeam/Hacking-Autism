
$(document).ready(function(){
  var max_width = $('.img_left').width();

  $('.scale a').click(function(){
    var scale_value = $(this).text();
    var new_width = max_width/scale_value;
    $('.img_left').css('width',new_width+'px');
  });
  
  $("#slider").slider({
    change: function(event, ui) {
      alert('ok');
      var scale_value = $(this).value()/100;
      var new_width = max_width/scale_value;
      $('.img_left').css('width',new_width+'px');
    }
  });
});
