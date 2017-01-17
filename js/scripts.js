$(document).ready(function() {
  $("#stress-form").submit(function(event) {
    event.preventDefault();

    $("#stress-form").hide();

    var warningCtr = 0;
    var symptomsCtr = 0;
    var reliefCtr = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSignsInput = $(this).val();
      warningCtr += 1;
      $("#stress-response").append("<li>" + warningSignsInput + "</li>" + "<br>");
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      var stressSymptoms = $(this).val();
      symptomsCtr += 1;
      $("#symptom-response").append("<li>" + stressSymptoms + "</li>" + "<br>");
    });

    $("input:checkbox[name=relievers]:checked").each(function() {
      var userStressRelief = $(this).val();
      reliefCtr += 1;
      $("#stress-relievers").append("<li>" + userStressRelief +"</li>" + "<br>");
    });

    $(".initially-hidden").show();
    if (warningCtr === 0) {
      $("#warnContent").hide();
    }
    if (symptomsCtr === 0 ) {
      $("#stressPara").hide();
    }
    if (reliefCtr === 0 ) {
      $("#relieverPara").hide();
    }


    if (symptomsCtr > reliefCtr) {
      $("#stressInfo").show();
    } else if (reliefCtr >= symptomsCtr) {
      $("#healthyInfo").show();
    }





  });
});
