//=============================================================================
//   Promise.all
//=============================================================================

var p1 = new Promise(function(resolve, reject) {
    resolve(111);
});

var p2 = new Promise(function(resolve, reject) {
    resolve(222);
});

var p3 = new Promise(function(resolve, reject) {
    resolve(333);
});

// Promise.all()を使うと、配列で渡したp1, p2, p3を並列に実行します
Promise.all([p1, p2, p3])
.then(function(result) {
    // そしてresultにはp1, p2, p3の結果が配列で入っています
    console.log("result", result);
    // => result [ 111, 222, 333 ]
    return 444;
})
.then(function(result) {
    console.log("result", result);
    // => result 444
});
