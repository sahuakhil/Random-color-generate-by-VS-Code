let bgColorsArray = ["grey","green","red", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainerelement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

function Clickme() {
    let numberofBgcolor = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberofBgcolor);
    if (randomColorIndex === numberofBgcolor) {
        randomColorIndex = numberofBgcolor - 1;
    }
    let randombgColor = bgColorsArray[randomColorIndex];
    bgContainerelement.style.backgroundColor = randombgColor;
}