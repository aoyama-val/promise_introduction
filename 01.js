//=============================================================================
//   Promiseオブジェクトの作り方
//=============================================================================

// new Promise()をするとPromiseオブジェクトを作成できます。
// new Promise()の引数には、2引数の関数を与えます。
var p = new Promise(function(resolve, reject) {
});

// このpがPromiseオブジェクトです。
console.log(p);
// => Promise { <pending> }

// Promiseオブジェクトは次のいずれかの状態をとります。
//     pending:   初期状態
//     fulfilled: 処理が成功して完了した
//     rejected:  処理が失敗した
