$("h1").addClass("heading");
//setTimeout('$("h1").addClass("heading");', 3000)
setTimeout('$("h1").removeClass("heading");', 3000);
$("#second").hide();
setTimeout("$('#second').show()", 3000);
$("#third").append("Learn <span class='jquery'>jQuery</span>");
setTimeout('$("#third").empty()', 3000);

$("button").css("background-color", "yellow");
$("button").css("border-radius", "10px");
$("#button3").click(function() {
    $(".jquery").toggleClass("font-weight-bold");
});
$("#input-name").keydown(function() {
    $("#name").text($('#input-name').val());
    // append는 기존 내용에 추가, text는 삭제 후 추가
});

var position = 0;
$("#btnLeft").click(function() {
    position = position - 10;
    $("#image").css("transform", "translate(" + position + "px, 0px)");
});
$("#btnRight").click(function() {
    position = position + 10;
    $("#image").css("transform", "translate(" + position + "px, 0px)");
});
$("#datepicker").datepicker();