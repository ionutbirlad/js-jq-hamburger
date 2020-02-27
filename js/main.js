
$("a").on({
  click: function() {
    $(".hamburger-menu").addClass("active");}
});

$(".close").on({
  click: function() {
    $(".hamburger-menu").removeClass("active");}
});
