$(function () {
  $("button.input").on("click", function () {
    var letter = $(this).text();
    $("textarea")[0].value += letter;
  });
});

$(function () {
  $("button.space").on("click", function () {
    var letter = " ";
    $("textarea")[0].value += letter;
  });
});

