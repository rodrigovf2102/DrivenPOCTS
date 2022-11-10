import express from "express";
import Routes from "./routes/taskRoute.js";

const server = express();

server.use(express.json());
server.use(Routes);

server.listen(4000,()=>{console.log('Server ON')})