import express from "express";
var server = express();
server.use(express.json());
server.listen(4000, function () { console.log('Server ON'); });
