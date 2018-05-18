//=============================================================================
//   直列実行の途中でエラーが発生した場合は、.catchが呼ばれます
//=============================================================================

var f1 = function(result) {
    console.log("p1 called");
    return result + 10;
};

var f2 = function(result) {
    console.log("p2 called");
    throw "hoge";
    return result + 20;
};

var f3 = function(result) {
    // ここは呼ばれません
    console.log("p3 called");
    return result + 30;
};

[f1, f2, f3].reduce(function(s, x) { return s.then(x); }, Promise.resolve(1))
.then(function(result) {
    console.log("result", result);
})
.catch(function(error) {
    console.log("error", error);
    // => error hoge
});
