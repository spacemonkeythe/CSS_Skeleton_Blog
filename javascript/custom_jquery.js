$(document).ready(function() {
    // Create the dropdown bases
    $("<select />").appendTo(".navigation nav");

    // Create default option "Go to..."
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Go to..."
    }).appendTo("nav select");


    // Populate dropdowns with the first menu items
    $(".navigation nav li a").each(function() {
      var el = $(this);
      $("<option />", {
          "value"   : el.attr("href"),
          "text"    : el.text()
      }).appendTo("nav select");
    });

    //make responsive dropdown menu actually work
        $("nav select").change(function() {
          window.location = $(this).find("option:selected").val();
        });
});

$(document).ready(function() {
    $(".tweet").twittie({
        username: "spacemonkeythe",
        count: 3,
        loading_text: "loading tweets..."
    });
});


$(document).ready(function() {
    $('.flexslider').flexslider({
    animation: "slide"
  });
});
