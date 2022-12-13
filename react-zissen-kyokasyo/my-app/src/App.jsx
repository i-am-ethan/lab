export const App = ()=>{
  const onClickButton = () => {
    alert()
  }
  return(
  <>
    <h1>こんにちは!</h1>
    <p>こんばんは</p>
    <button onClick={onClickButton}>ボタン</button>
  </>
  )
}