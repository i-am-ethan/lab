export const  createArticleEle = (href, src, title_alt, desc) => {

  /**=========================================================
   * グローバル変数
   =========================================================*/
  const articleWrapper = document.querySelector('.articles_wrapper')


  /**=========================================================
   * イベントハンドラ
   =========================================================*/
  // 初期化
  const init = () => {
    createArticles()
  }

  /**=========================================================
   * イベントリスナー
   =========================================================*/
  window.addEventListener('onload', init())


  /**=========================================================
   * ユーザー定義関数
   =========================================================*/

  // 記事を生成する
  function createArticles () {
    // create html elements
    const articleTag = document.createElement('article')
    const aTag = document.createElement('a')
    const thumbnail = document.createElement('img')
    const articleContainer = document.createElement('div')
    const articleTitle = document.createElement('h3')
    const articleDescription = document.createElement('p')
    // set attribute
    // articleTag.classList.add('fade-in-bottom')
    articleTag.classList.add('article')
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
}