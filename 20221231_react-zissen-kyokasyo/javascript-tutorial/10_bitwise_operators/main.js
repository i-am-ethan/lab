///論理演算子の本当の意味 && ||


// || : 左側がfalseなら右側を返す
const num = 100
// const num = null
const fee = num || "金額未設定です"
console.log(fee)


// && : 左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました"
console.log(fee2)

