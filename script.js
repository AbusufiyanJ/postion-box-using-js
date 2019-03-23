
/*var button =document.getElementById("right"),
count = 0;
button.onclick = function() {
    count += 1;
    newtext.innerHTML =  layerText.style.left = "50px";
}
*/



function move(direction) {
    var layerText = document.getElementById("newtext");

    switch (direction) {
        case "left":
            layerText.style.left = "50px";
            break;

        case "left":
            layerText.style.left = "100px";
            break; 

        case "right":
            layerText.style.left = "150px";
            break;

        case "up":
            layerText.style.top = "80px";
            break;
        case "down":
            layerText.style.top = "125px";
            break;
    }
    
}
