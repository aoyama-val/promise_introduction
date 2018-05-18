//=============================================================================
//   .thenの中でPromiseオブジェクトを返した場合
//=============================================================================

var p = new Promise(function(resolve, reject) {
    resolve(123);
});

p.then(function(result) {
    console.log("result", result);
    // => result 123

    // .thenの中でPromiseオブジェクトを返すと、そのPromiseが実行された後で次の.thenが実行されます。
    return new Promise(function(resolve, reject) {
        resolve(result + 200);
    });
})
.then(function(result) {
    console.log("result", result);
    // => result 323
});
