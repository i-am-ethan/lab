import { useEffect } from "react"
import { useState } from "react"
import {ColorMessage} from "./components/ColorMessage"
import { CssModules } from "./components/CssModules"

export const App = ()=>{

  const [num, setNum] = useState(0)

  useEffect(()=>{
    console.log("numが変更されました")
  }, [num])

  const onClickButton = () => {
    setNum(num+1)
  }
  return(
  <>
    <h1 style={{color:"red"}}>こんにちは!</h1>
    <p>こんばんは</p>
    <ColorMessage color="blue">お元気ですか？</ColorMessage>
    <ColorMessage color="pink">元気です！</ColorMessage>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>

    <CssModules></CssModules>
  </>
  )
}