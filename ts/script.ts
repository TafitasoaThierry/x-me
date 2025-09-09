loading();

document.addEventListener('contextmenu', function() {
    event.preventDefault();
})

function loading() {
    let container = document.getElementsByClassName("container")[0] as HTMLElement;
    let welcome = document.getElementsByClassName("welcome")[0] as HTMLElement;
    let presentation = document.getElementsByClassName("presentation")[0] as HTMLElement;

    document.getElementById("year").innerHTML = (new Date().getFullYear() - 2023).toString();
    document.body.style.height = "100vh";
    container.style.display = "none";
    presentation.style.display = "none";

    setTimeout(() => {
        presentation.style.display = "inherit";
        setTimeout(() => {
            welcome.style.display = "none";
            container.style.display = "inherit";
            document.body.style.height = "auto";
        }, 4000)
    }, 4000)
}

let slide = document.getElementsByClassName("work-content") as unknown as HTMLElement;
let start = 0;
let end = 4;
let current = start;

slide[current].style.display = "inline";
function forward() {
    slide[current].style.display = "none";
    if(current == end) {
        current = start;
        slide[current].style.display = "inline";
    }else {
        current = current + 1;
        slide[current].style.display = "inline";
    }
}
function back() {
    slide[current].style.display = "none";
    if(current == start) {
        current = end;
        slide[current].style.display = "inline";
    }else {
        current = current - 1;
        slide[current].style.display = "inline";
    }
}