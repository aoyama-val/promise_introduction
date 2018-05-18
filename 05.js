//=============================================================================
//   rejectと.catch
//=============================================================================

var p = new Promise(function(resolve, reject) {
    // rejectを呼び出すとエラー発生となります。
    // .thenは呼ばれず、.catchが呼ばれます。
    reject(123);
});

p.then(function(result) {
    // ここは呼ばれません
    console.log("result", result);
})
.catch(function(error) {
    console.log("error", error);
    // => error 123
    return 456;
})
.then(function(result) {
    // ここは呼ばれます
    console.log("result", result);
    // => result 456
});
