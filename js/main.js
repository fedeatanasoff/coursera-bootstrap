$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $(".carousel").carousel({
    interval: 2500
  });

  // MODAL
  $("#exampleModal").on("show.bs.modal", function(e) {
    console.log("abriendo modal");
    $("#modalBtn").removeClass("btn-info");
  });
  $("#exampleModal").on("shown.bs.modal", function(e) {
    console.log("modal abierto");
    $("#modalBtn").addClass("btn-warning");
    $("#modalBtn").prop("disabled", true);
  });
  $("#exampleModal").on("hide.bs.modal", function(e) {
    console.log("escondiendo modal");
    $("#modalBtn").removeClass("btn-warning");
    $("#modalBtn").addClass("btn-info");
  });
  $("#exampleModal").on("hidden.bs.modal", function(e) {
    console.log("modal escondido");
    $("#modalBtn").prop("disabled", false);
  });
});
