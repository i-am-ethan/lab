import {ColorMessage} from "./components/ColorMessage"

export const App = ()=>{
  const onClickButton = () => {
    alert()
  }
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px",
  // }
  return(
  <>
    <h1 style={{color:"red"}}>こんにちは!</h1>
    <p>こんばんは</p>
    <ColorMessage color="blue" message="お元気ですか？" />
    <ColorMessage color="pink" message="元気です！" />
    {/* <p style={contentPinkStyle}>元気です！</p> */}
    <button onClick={onClickButton}>ボタン</button>
  </>
  )
}