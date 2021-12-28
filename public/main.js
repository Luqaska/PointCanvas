var socket=io();

function setup () {
    createCanvas(innerWidth, innerHeight);

    socket.on("draw", (data)=>{
        noStroke();
        fill(data.color);
        circle(data.x, data.y, data.r, data.r);
    });

    background(255,255,255);
}

function mouseDragged () {
    noStroke();
    fill(document.getElementById("color").value);
    circle(mouseX, mouseY, document.getElementById("brushSize").value, document.getElementById("brushSize").value);

    socket.emit("draw", {x:mouseX, y:mouseY, r:document.getElementById("brushSize").value, color:document.getElementById("color").value});
}