$(function() {
  let dropdown_header = $(".dropdown_header").html();
  let chosenCity = "";

  // toggle the content of the location bar
  $(".dropdown_header").on("click", () =>
    $(".location_dropDown").toggleClass("hidden")
  );

  // change the location
  $(".city").on("click", function(e) {
    e.preventDefault();
    chosenCity = $(this).html();
    $(".dropdown_header").html(`(${dropdown_header} (${chosenCity}`);
    $(".location_dropDown").toggleClass("hidden");
  });
});
