import { ChangeEvent, useState, FC } from "react"
import styled from "styled-components"

export const App: FC = () => {
  // テキストボックスstate
  const [text, setText] = useState<string>("");
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([])

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickAdd = () => {
    // State変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text)
    setMemos(newMemos)
    // テキストボックスを空に
    setText('')
  }

  const onClickDelete = (index:number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos);
  }


  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index)=>(
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={()=> onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  )
}

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

