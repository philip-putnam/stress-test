$(document).ready(function() {
  $("#stress-form").submit(function(event) {
    event.preventDefault();

    $("#stress-form").hide();
    $(".initially-hidden").show();

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSignsInput = $(this).val();
      $("#stress-response").append("<li>" + warningSignsInput + "</li>" + "<br>");
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      var stressSymptoms = $(this).val();
      $("#symptom-response").append("<li>" + stressSymptoms + "</li>" + "<br>");
    });

    $("input:checkbox[name=relievers]:checked").each(function() {
      var userStressRelief = $(this).val();
      $("#stress-relievers").append("<li>" + userStressRelief +"</li>" + "<br>");
    });

  });
});
