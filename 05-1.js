//=============================================================================
//   throwと.catch
//=============================================================================

var p = new Promise(function(resolve, reject) {
    // Promiseの中でthrowされると、自動的にtry-catchされ、
    // .thenは呼ばれず、.catchが呼ばれます。
    throw 123;
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

