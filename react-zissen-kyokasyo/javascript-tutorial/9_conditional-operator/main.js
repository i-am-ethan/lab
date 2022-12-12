// 三項演算子
// ある条件 ? 条件がtrueの時の処理 : 条件がfalseな時の処理

const val1 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val1)

const printFormattedNum = (num) =>{
  const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入れてください"
  console.log(formattedNum)
}
printFormattedNum(1300)
printFormattedNum("1300")