console.log('main.js')

// get html elements
const articleWrapper = document.querySelector('.articles_wrapper')


// get json file
fetch('../assets/json/articles.json')
.then((res)=>{
  return res.json()
})
.then((json)=>{
  console.log(json)
})




const  createArticleEle = () => {
  const articleTag = document.createElement('article')
  const aTag = document.createElement('a')
  const thumbnail = document.createElement('img')
  const articleContainer = document.createElement('div')
  const articleTitle = document.createElement('h3')
  const articleTxt = document.createElement('p')
}