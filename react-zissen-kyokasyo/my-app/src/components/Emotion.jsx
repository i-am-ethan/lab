/** @jsxImportSource @emotion/react*/
import {jsx, css} from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  })
  return(
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <SButton>ボタン</SButton>
      {/* <button>ボタン</button> */}
    </div>
  )
}

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover{
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`