//=============================================================================
//   .thenは連鎖することができます
//=============================================================================

var p = new Promise(function(resolve, reject) {
    resolve(123);
});

// .thenは連鎖することができます。
p.then(function(result) {
    console.log("result", result);
    // => result 123

    // .thenの中でreturnすると、その値が次の.thenのresultになります。
    return result + 100;
})
.then(function(result) {
    console.log("result", result);
    // => result 223
});
