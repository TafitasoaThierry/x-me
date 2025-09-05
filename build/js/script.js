device();
loading();
startSlideShow();
var timer = 0;
function getData() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    console.log("w: ".concat(width, ", h: ").concat(height));
    console.log("t: ".concat(timer));
    setTimeout(function () {
        timer = timer + 1;
        getData();
    }, 1000);
}
function device() {
    console.log(navigator.appCodeName);
    console.log(navigator.product);
    console.log(navigator.language);
    console.log(navigator.platform);
    console.log(navigator.appVersion);
}
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
            // getData();
        }, 4000);
    }, 4000);
}
function startSlideShow() {
    var kisaka = document.getElementsByClassName("image-presentation")[1];
    var mandeha = true;
    var miverina = false;
    var fetra = 505;
    var fiatombohany = 0;
    var x = fiatombohany;
    setInterval(function () {
        fetra = window.innerWidth <= 340 ? 305 : 505;
        if ((mandeha) && (x != fetra)) {
            kisaka.scrollLeft = x;
            x++;
        }
        else if ((mandeha) && (x == fetra)) {
            mandeha = false;
            miverina = true;
            kisaka.scrollLeft = x;
        }
        else if ((miverina) && (x != fiatombohany)) {
            kisaka.scrollLeft = x;
            x--;
        }
        else {
            mandeha = true;
            miverina = false;
            kisaka.scrollLeft = x;
        }
    }, 30);
}
