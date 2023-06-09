//　変数numに0~100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100)

// 変数numの値を出力する
  console.log(num);
  //if文を用いて、numbeSrが3の倍数の時に「3の倍数です」、5の倍数のときは「5の倍数です」、3の倍数かつ5の倍数の時は「3と5の倍数です」、そうでないときは数字を出力してください
  if (num % 15 === 0) {
  console.log("3と5の倍数です");
}
  else if (num % 3 === 0) {
  console.log("3の倍数です");
}
  else if (num % 5 === 0) {
  console.log("5の倍数です");
} 
else {
  console.log(num);  
}


