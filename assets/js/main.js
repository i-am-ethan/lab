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

createArticleEle(
  "./20221028_webgl-img-slider/index.html",
  "./assets/img/thumbnail/webgl-image-transition.jpg",
  "WebGL Image Transition",
  "WebGLを用いた画像切り替え",
)
createArticleEle(
  "./20221028_webgl-img-slider/index.html",
  "./assets/img/thumbnail/webgl-image-transition.jpg",
  "WebGL Image Transition",
  "WebGLを用いた画像切り替え",
)
