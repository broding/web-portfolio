var i = 0;
var images = [];    
var time = 3000;    

images[0] = "img/slide-tracklab.png"
images[1] = "img/slide-rekt.png"
images[2] = "img/slide-dinos.png"
images[3] = "img/slide-rescuewings.png"
images[4] = "img/slide-sxpd.png"

function changeImage() {
    document.getElementById("slide").src = images[i];

    if (i < images.length - 1) {     
        i++;
    } else {
        i = 0;  
    }
    setTimeout(changeImage, time);
}
window.onload = changeImage;

