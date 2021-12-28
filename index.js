var express=require("express");
var app=express();

var server=require("http").createServer(app);
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

var socket=require("socket.io");
var io=socket(server);

io.on("connection", (socket)=>{
    console.log("Wow! Someone joined!");

    socket.on("draw", (data)=>{
        socket.broadcast.emit("draw", data);
    });
});

server.listen(3000);

