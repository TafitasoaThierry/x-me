loading();
document.addEventListener('contextmenu', function () {
    event.preventDefault();
});
function loading() {
    var container = document.getElementsByClassName("container")[0];
    var welcome = document.getElementsByClassName("welcome")[0];
    var presentation = document.getElementsByClassName("presentation")[0];
    document.getElementById("year").innerHTML = (new Date().getFullYear() - 2023).toString();
    document.body.style.height = "100vh";
    container.style.display = "none";
    presentation.style.display = "none";
    setTimeout(function () {
        presentation.style.display = "inherit";
        setTimeout(function () {
            welcome.style.display = "none";
            container.style.display = "inherit";
            document.body.style.height = "auto";
        }, 4000);
    }, 4000);
}
var slide = document.getElementsByClassName("work-content");
var start = 0;
var end = 4;
var current = start;
slide[current].style.display = "inline";
function forward() {
    slide[current].style.display = "none";
    if (current == end) {
        current = start;
        slide[current].style.display = "inline";
    }
    else {
        current = current + 1;
        slide[current].style.display = "inline";
    }
}
function back() {
    slide[current].style.display = "none";
    if (current == start) {
        current = end;
        slide[current].style.display = "inline";
    }
    else {
        current = current - 1;
        slide[current].style.display = "inline";
    }
}
