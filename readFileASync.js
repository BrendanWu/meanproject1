var fs = require("fs");

var onFileLoad = function(err,file){
console.log("got the file")
};

console.log("giong to get");
fs.readFile("readFileSync.js", onFileLoad);
console.log("app continues");
