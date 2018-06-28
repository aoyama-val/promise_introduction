//=============================================================================
//   関数を直列実行するには、Array.prototype.reduce()を使います
//=============================================================================

var task1 = function(result) {
    console.log("task1 called");
    return result + 10;
};

var task2 = function(result) {
    console.log("task2 called");
    return result + 20;
};

var task3 = function(result) {
    console.log("task3 called");
    return result + 30;
};


// 1. 一番ベタな書き方
// これだとタスクの個数が可変になった場合に対応できません。

var p = Promise.resolve(1);
p = p.then(task1);
p = p.then(task2);
p = p.then(task3);
p.then(function(result) {
    console.log("result", result);
    // => result 61
});

// 2. forEachを使った書き方
// やっていることは1.とまったく同じですが、これならタスクの個数が可変になっても、
// タスクを全部配列に入れるだけで対応できます。

var p = Promise.resolve(1);
[task1, task2, task3].forEach(function(f) {
    p = p.then(f);
});
p.then(function(result) {
    console.log("result", result);
    // => result 61
});

// 3. reduceを使った書き方
// 基本的に2.と同じですが、reduceを使ってかっこよく。
// 実際にはこの書き方が一番一般的かもしれません。

[task1, task2, task3].reduce(function(s, x) { return s.then(x); }, Promise.resolve(1))
.then(function(result) {
    console.log("result", result);
    // => result 61
});
