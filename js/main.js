$(document).ready(function () {
  var i = 1;
  $("#btn").on("click", function () {
    $("#cart").modal();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  // Xoa san pham
  var remove_cart = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i];
    button.addEventListener("click", function () {
      var button_remove = event.target;
      button_remove.parentElement.parentElement.remove();
    });
  }
});
