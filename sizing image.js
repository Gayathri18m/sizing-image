let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;

let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
imageWidthElement.textContent = originalImageWidth;


let minWidth = 100;
let defaultwidth = 200;
let maxWidth = 300;

let minWidthWarningMessage = "Can't Visible.Increase the size of the Image.";
let maxWidthWarningMessage = "Too big. Decrease the size of the Image";

function onDecrement() {
    if (defaultwidth <= minWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        defaultwidth = defaultwidth - 5;
        originalImageWidth = defaultwidth + "px";
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}

function onIncrement() {
    if (defaultwidth >= maxWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        defaultwidth = defaultwidth + 5;
        originalImageWidth = defaultwidth + "px";
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}