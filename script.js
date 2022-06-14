$("button").click(function() {
    var inputValue1 = $(".ques1").val();
    var inputValue2 = $(".ques2").val();
    var inputValue3 = $(".ques3").val();

    var finalcaldecimal = ((inputValue3 - inputValue2 * inputValue1) / inputValue1 * inputValue2 / inputValue1) + 232;
    var finalcal = Math.trunc(finalcaldecimal);

    var sentenceStarter = "Your coolness is ";

    $(".fortune-display").append("<br>" + "<p>" + sentenceStarter + finalcal + "</p>");
});