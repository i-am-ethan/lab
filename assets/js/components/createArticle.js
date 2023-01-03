export const  createArticleEle = () => {
  // get html elements
  const articleWrapper = document.querySelector('.articles_wrapper')

  // create html elements
  const articleTag = document.createElement('article')
  const aTag = document.createElement('a')
  const thumbnail = document.createElement('img')
  const articleContainer = document.createElement('div')
  const articleTitle = document.createElement('h3')
  const articleTxt = document.createElement('p')

  // set attribute
  aTag.setAttribute('href', './20221028_webgl-img-slider/index.html')
  thumbnail.setAttribute('src', './assets/img/thumbnail/webgl-image-transition.jpg')
  thumbnail.setAttribute('alt', 'WebGL Image Transition')
  articleContainer.classList.add('article_container')
  articleTitle.textContent = "WebGL Image Transition"
  articleTxt.textContent = "WebGLを用いた画像切り替え"

  // append
  articleContainer.appendChild(articleTitle)
  articleContainer.appendChild(articleTxt)
  aTag.appendChild(thumbnail)
  aTag.appendChild(articleContainer)
  articleTag.appendChild(aTag)
  articleWrapper.appendChild(articleTag)
}