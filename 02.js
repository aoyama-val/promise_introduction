//=============================================================================
//  new Promise()の中でresolveを呼び出すと、その引数がresultになります 
//=============================================================================

var p = new Promise(function(resolve, reject) {
    // new Promise()の中でresolveを呼び出すと、その引数が次の.thenのresultになります。
    resolve(123);
});

// Promiseオブジェクトはthenというメソッドを持っています。
// thenの引数には関数を渡します。この関数のことをタスクといいます。
p.then(function(result) {
    console.log("result", result);
    // => result 123
});
