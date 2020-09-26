let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function baseDraw()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setInterval(baseDraw, 1000);