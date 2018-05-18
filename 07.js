// Promise.resolve(x)は
// new Promise(function(resolve, reject) {
//     return x;
// })
// と同じです
var p1 = Promise.resolve(123);

p1.then(function(result) {
    console.log("result", result);
    // => result 123
});
