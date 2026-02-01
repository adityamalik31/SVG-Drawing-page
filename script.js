var canvas = document.getElementById("canvas");
var isDrawing = false;
var currentPath;
var colors = ["black", "red", "blue"];
var colorIndex = 0;
canvas.addEventListener("mousedown", function() {
    isDrawing = true;
    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    currentPath.style.stroke = colors[colorIndex];
    canvas.appendChild(currentPath);
});
canvas.addEventListener("mouseup", function() {
    isDrawing = false;
});
canvas.addEventListener("mousemove", function(event) {
    if (isDrawing == true) {
        var points = currentPath.getAttribute("points");
        if (points == null) {
            points = "";
        }
        var newPoint = event.offsetX + "," + event.offsetY + " ";
        
        currentPath.setAttribute("points", points + newPoint);
    }
});
document.getElementById("clearBtn").addEventListener("click", function() {
    canvas.innerHTML = "";
});
document.getElementById("colorBtn").addEventListener("click", function() {
    if (colorIndex < 2) {
        colorIndex = colorIndex + 1;
    } else {
        colorIndex = 0;
    }
});