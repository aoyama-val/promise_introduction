//=============================================================================
//   直列実行の途中でエラーが発生した場合は、.catchが呼ばれます
//=============================================================================

var p1 = new Promise(function(resolve, reject) {
    console.log("p1 called");
    resolve(111);
});

var p2 = new Promise(function(resolve, reject) {
    console.log("p2 called");
    reject(222);
});

var p3 = new Promise(function(resolve, reject) {
    console.log("p3 called");
    resolve(333);
});

[p1, p2, p3].reduce(function(s, x) { return s.then(function() { return x; }); }, Promise.resolve())
.then(function(result) {
    console.log("result", result);
})
.catch(function(error) {
    console.log("error", error);
});
