$(() => {
  $(".sub-img img").click(function () {
    let imgPath = $(this).attr("src");
    $("#myImg").attr("src", imgPath);
  });
});
