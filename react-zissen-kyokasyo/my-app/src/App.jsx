export const App = ()=>{
  const onClickButton = () => {
    alert()
  }
  return(
  <>
    <h1 style={{color:"red"}}>こんにちは!</h1>
    <p>こんばんは</p>
    <button onClick={onClickButton}>ボタン</button>
  </>
  )
}