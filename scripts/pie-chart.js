var data = [["3DS Max", 8], ["Maya", 8], ["Unity", 5], ["After Effects", 4], ["Java", .5], ["HTML/CSS", .5]];
var colors = ['rgb(236, 208, 120)', 'rgba(217, 91, 67, 0.7)', 'rgba(192, 41, 66, 0.7)', 'rgba(84, 36, 55, 0.7)', 'rgba(83, 119, 122, 0.7)', 'rgba(119, 146, 174, 0.7)'];

var canvas = document.getElementById("software-canvas");
var context = canvas.getContext("2d");
var total = 0;

for (var i = 0; i < data.length; i++) {
    total += data[i][1];
}

var x = 100;
var y = 100;
var radius = 100;
var startingPoint = 0;

for (var i = 0; i < data.length; i++) {
    var percent = data[i][1] * 100 / total;
    var endPoint = startingPoint + (2 / 100 * percent);

    context.beginPath();
    context.fillStyle = colors[i];
    context.moveTo(x, y);
    context.arc(x, y, radius, startingPoint * Math.PI, endPoint * Math.PI);
    context.fill();

    startingPoint = endPoint;

    // legenda
    context.rect(220, 25 * i, 15, 15);
    context.fill();
    context.fillStyle = "black";
    context.fillText(data[i][0], 245, 25 * i + 15);
}
