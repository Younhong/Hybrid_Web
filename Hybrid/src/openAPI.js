var haksik = [];
var moms = [];

$.ajax("http://smart.handong.edu/api/service/menu")
    .done(function(result) {
        haksik = result.haksik;
        moms = result.moms;
        addItems(haksik);
    });

function addItems(menuArr) {
    for (const menu of menuArr) {
        $("#tableBody").append(
            `<tr><td>${menu.menu_kor}</td><td>${menu.price}</td></tr>`
        );
    }
}
$("#haksikBtn").click(function() {
    $("#tableBody").html("");
    addItems(haksik);
});
$("#momsBtn").click(function() {
    $("#tableBody").html("");
    addItems(moms);
});