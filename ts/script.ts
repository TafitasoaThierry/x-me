//device();
loading();
// startSlideShow();
//let timer:number = 0;

document.addEventListener('contextmenu', function() {
    event.preventDefault();
})

/*
function getData() {
    let width:number = window.innerWidth;
    let height:number = window.innerHeight;

    console.log(`w: ${width}, h: ${height}`);
    console.log(`t: ${timer}`);
    setTimeout(() => {
        timer = timer + 1;
        getData();
    }, 1000)
}

function device() {
    console.log(navigator.appCodeName);
    console.log(navigator.product);
    console.log(navigator.language);
    console.log(navigator.platform);
    console.log(navigator.appVersion);
}
*/
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
            // getData();
        }, 4000)
    }, 4000)
}
/*
function startSlideShow() {
    let kisaka:any = document.getElementsByClassName("image-presentation")[1] as HTMLElement;
    let mandeha:boolean = true;
    let miverina:boolean = false;
    let fetra:number = 505;
    let fiatombohany:number = 0;
    let x:number = fiatombohany;

    setInterval(() => {
        fetra = window.innerWidth <= 340 ? 305 : 505;
        if((mandeha) && (x != fetra)) {
            kisaka.scrollLeft = x;
            x++;
        }else if((mandeha) && (x == fetra)) {
            mandeha = false;
            miverina = true;
            kisaka.scrollLeft = x;
        }else if((miverina) && (x != fiatombohany)) {
            kisaka.scrollLeft = x;
            x--;
        }else {
            mandeha = true;
            miverina = false;
            kisaka.scrollLeft = x;
        }
    }, 30)
}
*/

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