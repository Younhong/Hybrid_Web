$("#alert").click(function() {
    alert("Button Clicked!");
})

$("#alert2").click(function() {
    $("#alert").click();
})

alert($("div.demo-box").html());
$("#btn").click(function() {
    $("div.demo-box").html("<div>Button clicked!</div>")
});

$("#btn2").click(function() {
    alert($("div.demo-box").text());
})
$("#btn3").click(function() {
    $("div.demo-box").empty();
})
$("#btn4").click(function() {
    $("div.demo-box").append("<p>Append Sample</p>");
})

$("#red-btn").click(function() {
    $("div.demo-box").removeClass('yellow');
    $("div.demo-box").addClass('red');
})
$("#yellow-btn").click(function() {
    $("div.demo-box").removeClass('red');
    $("div.demo-box").addClass('yellow');
})

$("#inputBox").val("Hello");
$("#selectBox").val(3);

var todos = [];
$("#addButton").click(function() {
    var text = $("#inputBox2").val();
    todos[text] = false;
    $("#inputBox2").val("");
    console.log(todos);

    $(".contents ul").append(liTemplate(text));
});

function inputTemplate(text) {
    var inputTag = $('<input type="checkbox" id="checkbox">');
    inputTag.data("value", text);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button id="deleteButton">X</button>');
    buttonTag.data("value", text);
    return buttonTag;
}

function liTemplate(text) {
    var li = $("<li></li>");

    li.attr("value", text);
    li.append(inputTemplate(text));
    li.append(text);
    li.append(buttonTemplate(text));

    li.click(function(event) {
        var el = $(event.target);
        console.log(el.data("value"));

        if (el.is("button")) {
            delete todos[text];
            $(`li[value='${text}']`).remove();
        }else if(el.is("input[type='checkbox']")) {
            var isChecked = el.is(":checked");
            if (isChecked) {
                $(`li[value='${text}']`).addClass("checked");
                todos[text] = true;
            } else {
                $(`li[value='${text}']`).removeClass("checked");
                todos[text] = false;
            }
        }
    })

    return li;
}

var students= [{name: 'Younhong', id: '219'}, {name: 'Sophie', id: '218'}];
var ul = $('#ul');
for (let student of students) {
    var li = $('<li>' + student.name + '</li>');
    li.data('id', student.id);
    li.click(function(event) {
        var el=$(event.target);
        alert(el.data('id'));
    });
    ul.append(li);
}