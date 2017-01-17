$(document).ready(function() {
  $("#stress-form").submit(function(event) {
    event.preventDefault();

    $("#stress-form").hide();
    $("#stress-response").show();

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSignsInput = $(this).val();
      $("#stress-response").append(warningSignsInput + "<br>");

    });


  });
});
