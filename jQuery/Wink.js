
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










/* SECOND ATTEMPT
$(".lame").click(function(){
  $(this).toggleClass("hide");
});
*/
/* THIRD ATTEMPT from http://stackoverflow.com/questions/10462544/how-can-i-toggle-between-2-images
$("#infoToggler").click(function() {
    $(this).find('img').toggle();
});​
*/
/* COULD BE HELPFUL from http://stackoverflow.com/questions/540349/change-the-image-source-on-rollover-using-jquery
$(function() {
    $("#evil")
        .mouseover(function() {
            var src = $(this).attr("src").match(/[^\.]+/) + "img/VillainFounderPic.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("img/VillainWink.png", "img/VillainFounderPic.png");
            $(this).attr("src", src);
        });
});
*/
/*
$("button").click(function() {
  $( this ).replaceWith(".wink");
});
*/
