// 従来のfor文

const nameArr = ["主だ","先おか","後藤"]

for(let index =0; index<nameArr.length; index++){
  console.log(nameArr[index])
}

// map関数
const nameArr2 = nameArr.map((name)=>{
  return name
})
console.log(nameArr2)

// filter関数:条件と同じものだけが返却される関数

const numArr = [1,2,3,4,5]
const newNumArr = numArr.filter((num)=>{
  return num%2===1
})
console.log(newNumArr)

// indexの扱い
nameArr.map((name, index)=>{
  console.log(`${index+1}番目は${name}です`)
})