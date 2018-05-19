//=============================================================================
//   関数を直列実行するには、Array.prototype.reduce()を使います
//=============================================================================

var f1 = function(result) {
    console.log("p1 called");
    return result + 10;
};

var f2 = function(result) {
    console.log("p2 called");
    return result + 20;
};

var f3 = function(result) {
    console.log("p3 called");
    return result + 30;
};

// 1. reduceを使った書き方

[f1, f2, f3].reduce(function(s, x) { return s.then(x); }, Promise.resolve(1))
.then(function(result) {
    console.log("result", result);
    // => result 61
});

// 2. reduceを使わない書き方
// （やっていることは1.とまったく同じです）

var p = Promise.resolve(1);
[f1, f2, f3].forEach(function(f) {
    p = p.then(f);
});
p.then(function(result) {
    console.log("result", result);
    // => result 61
});

