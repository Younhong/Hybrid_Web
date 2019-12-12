var todos = {};

$.ajax("http://54.180.91.79:3000/todos").done(function(result) {
    console.log(result);
    todos = result;
    for (const todo of Object.keys(todos)){
        $(".contents ul").append(liTemplate(todo, todos[todo]));
    }
});

$("#addButton").click(function() {
    var text = $("#inputBox").val();
    todos[text] = false;
    $("#inputBox").val("");
    console.log(todos);

    $(".contents ul").append(liTemplate(text, false));
    saveTodos();
});

function inputTemplate(text, checked) {
    var inputTag = $('<input type="checkbox" id="checkbox">');
    inputTag.data("value", text);
    inputTag.attr("checked", checked);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button id="deleteButton">X</button>');
    buttonTag.data("value", text);
    return buttonTag;
}

function liTemplate(text, checked) {
    var li = $("<li></li>");

    li.attr("value", text);
    li.append(inputTemplate(text, checked));
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
        saveTodos()
    });

    return li;
}

function saveTodos() {
    $.ajax({
        url: "http://54.180.91.79:3000/todos",
        method: "POST",
        data: JSON.stringify({ todos: todos }),
        dataType: "json",
        contentType: "application/json"
    }).done(function() {
        console.log("POST done");
    });
}