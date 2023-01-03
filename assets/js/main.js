import {createArticleEle} from "./components/createArticle.js"

console.log('main.js')


// get json file
fetch('../assets/json/articles.json')
.then((res)=>{
  return res.json()
})
.then((json)=>{
  console.log(json)
})

createArticleEle()
