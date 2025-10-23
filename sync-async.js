const fs = require("fs");
const https = require("https");

console.log("Hello World!!");

var a = 100;
var b = 200;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched the data successfully");
}); //libuv

setTimeout(() => {
  console.log("setTimeout called after 5 Seconds");
}, 5000); //libuv

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data); //libuv
});

function multiplyFn(x, y) {
  const res = a + b;
  return res;
}

var c = multiplyFn(a, b);
console.log(c);
