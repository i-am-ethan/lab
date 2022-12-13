export const App = ()=>{
  const onClickButton = () => {
    alert()
  }
  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  }
  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px",
  }
  return(
  <>
    <h1 style={contentStyle}>こんにちは!</h1>
    <p>こんばんは</p>
    <p style={contentPinkStyle}>元気です！</p>
    <button onClick={onClickButton}>ボタン</button>
  </>
  )
}