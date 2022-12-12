const { TorusGeometry } = require("three")

const myProfile = {
  myName: "田中",
  age:24,
}

const {myName, age} = myProfile

console.log(myName, age)


const myFriendsProfile = {
  friendsName: "Tomo",
  age: 43,
}

const {friendsName: fn, age:a} = myFriendsProfile

console.log(fn, a)