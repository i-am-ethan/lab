import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
  const onClickButton = () => {
   alert() ;
  }
  return (
    <>
    <h1 style={{color:"red"}}>こんにちは！</h1>
    <ColorMessage color="blue" message="お元気ですか?"/>
    <ColorMessage color="pink" message="元気です！"/>
    <button onClick={onClickButton}>ボタン</button>
    </>
  )
}