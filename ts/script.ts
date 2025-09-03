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
startSlideShow();

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