const express = require('express');
const APP = express();
const PORT = 8000;
const IP = "192.168.100.9";
const PATH = require('path');

const server = APP.listen(PORT, IP, (err) => {
    if (err) console.log(err);
    console.log("Listening on https://" + IP + ":" + PORT + "/");
});