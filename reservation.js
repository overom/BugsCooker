$(document).ready(function() {
  $("div.btnReserv")
    .find("a")
    .click(function() {
      $("div.reservation__page").each(function() {
        if ($(this).hasClass("reservation__page--hidden")) {
          $(this).removeClass("reservation__page--hidden");
          $(this).addClass("reservation__page--fade");
        } else {
          $(this).removeClass("reservation__page--fade");
          $(this).addClass("reservation__page--hidden");
        }
      });
    });

  $("section#reservation")
    .find("span.btnReserv")
    .click(function() {
      $("div.reservation__page").each(function() {
        if ($(this).hasClass("reservation__page--hidden")) {
          $(this).removeClass("reservation__page--hidden");
          $(this).addClass("reservation__page--fade");
        } else {
          $(this).removeClass("reservation__page--fade");
          $(this).addClass("reservation__page--hidden");
        }
      });
    });
});
