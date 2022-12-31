import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
  const onClickButton = () => {
   alert() ;
  }
  return (
    <>
    <h1 style={{color:"red"}}>こんにちは！</h1>
    <ColorMessage color="blue">お元気ですか？</ColorMessage>
    <ColorMessage color="pink">元気です！</ColorMessage>
    <button onClick={onClickButton}>ボタン</button>
    </>
  )
}