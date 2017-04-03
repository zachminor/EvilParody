
$(function() {
  $('.evil').click(function(e){
    e.preventDefault();
    $(".evil").attr('src',"img/VillainWink.png");

  });
});
$(function() {
    $("img")
        .mouseover(function() {
            $(".evil").attr('src',"img/VillainFounderPic.png");
        })
        .mouseout(function() {
            $(".evil").attr('src',"img/VillainFounderPic.png");
        });
});


/*  This jQuery makes the picture of Cruelco's founder close his eye when clicked on and open it when the mouse is taken of the image */
