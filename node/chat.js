var curIndex = 0;
var language = "ko";

setInterval(function() {
    $.ajax(`http://54.180.91.79:3000/receive2?from=${curIndex}`).done(function(data) {
        for (const message of data.chats) {
            console.log(message);
            $("#chats").append(
                message.sender + ": " + (language == "ko" ? message.ko : message.en)
            );
            $("#chats").append("<br>");
        }
        curIndex = data.total;
    });
},1000);

$("#selectBox").change(function() {
    language = $("#selectBox").val();
    console.log(language);
    $("#chats").html("");
    curIndex = 0;
});

$("#sendButton").click(function() {
    var message = {
        ko: "",
        en: "",
        sender: $("#senderId").val()
    };

    if (language == "ko") message.ko = $("#chatInput").val();
    else message.en = $("#chatInput").val();

    console.log(message);

    $.ajax({
        url: "http://54.180.91.79:3000/send2",
        method: "POST",
        data: JSON.stringify(message),
        dataType: "json",
        contentType: "application/json"
    }).done(function() {
        console.log("POST done");
        $("#chatInput").val("");
    });
});