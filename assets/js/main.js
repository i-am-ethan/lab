import {createArticleEle} from "./components/createArticle.min.js"

// get json file
fetch('/lab/assets/json/articles.json')
// local: fetch('../assets/json/articles.json')
.then((res)=>{
  console.log(res)
  return res.json()
})
.then((json)=>{
  for(const article of json){
    createArticleEle(article.href, article.src, article.title_alt, article.desc)
  }
})
.catch((error)=>{
  console.log(error)
})