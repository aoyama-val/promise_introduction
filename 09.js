//=============================================================================
//   直列実行の途中でエラーが発生した場合は、.catchが呼ばれます
//=============================================================================

var task1 = function(result) {
    console.log("task1 called");
    return result + 10;
};

var task2 = function(result) {
    console.log("task2 called");
    throw "hoge";
    return result + 20;
};

var task3 = function(result) {
    // ここは呼ばれません
    console.log("task3 called");
    return result + 30;
};

[task1, task2, task3].reduce(function(promise, task) { return promise.then(task); }, Promise.resolve(1))
.then(function(result) {
    console.log("result", result);
})
.catch(function(error) {
    console.log("error", error);
    // => error hoge
});
