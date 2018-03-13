function testSuccess(targetId) {
  $(targetId).css({
    "border-color": "green",
    color: "green"
  });
}

function testError(targetId) {
  $(targetId).css({
    "border-color": "red",
    color: "red"
  });
}

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

  $("select#nombreDePersonnes")
    .find("option.nombreSpecial")
    .click(function() {
      $("form")
        .find("div.reservation__SpecialSeptOuPlus")
        .removeClass("reservation__SpecialSeptOuPlus--hidden");
    });

  $("select#nombreDePersonnes")
    .find("option.nombreNormal")
    .click(function() {
      $("form")
        .find("div.reservation__SpecialSeptOuPlus")
        .addClass("reservation__SpecialSeptOuPlus--hidden");
    });

  $("textarea#votreMessage").blur(function() {
    const separateurMotsRegex = /[ '-]+/;
    let messageUtilisateur = $(this).val();
    let chaine = messageUtilisateur.split(separateurMotsRegex);
    let nbWords = chaine.length;
    0 > nbWords && nbWords <= 100 ? testSuccess(this) : testError(this);
  });

  $("input#votreNom").blur(function() {
    const verifRegex = /^[a-z -]+$/i;
    let nomUtilisateur = $(this).val();
    nomUtilisateur.match(verifRegex) ? testSuccess(this) : testError(this);
  });

  $("input#Tel").blur(function() {
    const verifRegex = /^[0-9 -.()]+$/;
    let telUtilisateur = $(this).val();
    telUtilisateur.match(verifRegex) ? testSuccess(this) : testError(this);
  });

  $("input#SpecialSeptOuPlus").blur(function() {
    const verifRegex = /^[0-9]{1,2}$/;
    let SpecialSeptOuPlus = $(this).val();
    SpecialSeptOuPlus.match(verifRegex) ? testSuccess(this) : testError(this);
  });
});
