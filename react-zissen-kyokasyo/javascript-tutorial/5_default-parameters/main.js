const sayHello = (name)=>{
  console.log(`こんにちは${name}さん`)
}
sayHello() //undefined


const sayHello2 = (name = "田中")=>{
  console.log(`こんにちは${name}さん`)
}
sayHello2() //田中


// 分割代入のデフォルト値

const myProfile = {
  age:24,
}

const {name='ゲスト'} = myProfile
const message = `こんにちは${name}さん!`
console.log(message)