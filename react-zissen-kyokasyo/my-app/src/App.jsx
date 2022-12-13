import { useState } from "react"
import {ColorMessage} from "./components/ColorMessage"

export const App = ()=>{
  const [num, setNum] = useState(0)

  const onClickButton = () => {
    // alert()
    setNum(num+1)
  }
  return(
  <>
    <h1 style={{color:"red"}}>こんにちは!</h1>
    <p>こんばんは</p>
    {/* <ColorMessage color="blue" message="お元気ですか？" /> */}
    <ColorMessage color="blue">お元気ですか？</ColorMessage>
    {/* <ColorMessage color="pink" message="元気です！" /> */}
    <ColorMessage color="pink">元気です！</ColorMessage>
    {/* <p style={contentPinkStyle}>元気です！</p> */}
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
  </>
  )
}