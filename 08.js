//=============================================================================
//   Promiseオブジェクトを直列実行するには、Array.prototype.reduce()を使います
//=============================================================================

var p1 = new Promise(function(resolve, reject) {
    console.log("p1 called");
    resolve(111);
});

var p2 = new Promise(function(resolve, reject) {
    console.log("p2 called");
    resolve(222);
});

var p3 = new Promise(function(resolve, reject) {
    console.log("p3 called");
    resolve(333);
});

[p1, p2, p3].reduce(function(s, x) { return s.then(function() { return x; }); }, Promise.resolve())
.then(function(result) {
    console.log("result", result);
});
