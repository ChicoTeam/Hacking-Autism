
$(document).ready(function(){
  var max_width = $('.img_left').width();

  $("#slider").slider({
    change: function(event, ui) {
      var slider_value = $("#slider").slider("value");
      console.log(slider_value);
      var scale_value = slider_value/100;
      console.log(scale_value);
      var new_width = max_width*scale_value;
      $('.img_left').css('width',new_width+'px');
      console.log(new_width);
    }
  });
});
