export const  createArticleEle = (href, src, title_alt, desc) => {

  // get html elements
  const articleWrapper = document.querySelector('.articles_wrapper')

  // create html elements
  const articleTag = document.createElement('article')
  const aTag = document.createElement('a')
  const thumbnail = document.createElement('img')
  const articleContainer = document.createElement('div')
  const articleTitle = document.createElement('h3')
  const articleDescription = document.createElement('p')

  // set attribute
  aTag.setAttribute('href', href)
  aTag.setAttribute('target', "_blank")
  thumbnail.setAttribute('src', src)
  thumbnail.setAttribute('alt', title_alt)
  thumbnail.style.width = "240px"
  thumbnail.style.height = "135px"
  articleContainer.classList.add('article_container')
  articleTitle.textContent = title_alt
  articleDescription.textContent = desc

  // append
  articleContainer.appendChild(articleTitle)
  articleContainer.appendChild(articleDescription)
  aTag.appendChild(thumbnail)
  aTag.appendChild(articleContainer)
  articleTag.appendChild(aTag)
  articleWrapper.appendChild(articleTag)
}